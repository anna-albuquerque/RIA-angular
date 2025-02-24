import { Injectable } from "@angular/core";
import { Owner } from "./owner";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl = 'http://localhost:8000/api/owners/';
  private ownersSubject = new BehaviorSubject<Owner[]>([]);
  owners$: Observable<Owner[]> = this.ownersSubject.asObservable();

  private ownerCache: Owner[] = [];

  constructor(private http: HttpClient) {
    this.loadAllOwners();
  }

  createBean(): Owner {
    return new Owner("", 0, true);
  }

  loadAllOwners(): void {
    this.http.get<Owner[]>(this.apiUrl)
      .pipe(
        tap(owners => {
          this.ownerCache = owners;
          this.ownersSubject.next([...this.ownerCache]);
        }),
        catchError(error => {
          console.error('Error loading owners', error);
          return of([]);
        })
      )
      .subscribe();
  }

  insert(bean: Owner): void {
    this.http.post<Owner>(this.apiUrl, bean)
      .pipe(
        tap(newOwner => {
          this.ownerCache.push(newOwner);
          this.ownersSubject.next([...this.ownerCache]);
        }),
        catchError(error => {
          console.error('Error adding owner', error);
          return of(null);
        })
      )
      .subscribe();
  }

  remove(name: string): void {
    this.http.delete(`${this.apiUrl}${name}/`)
      .pipe(
        tap(() => {
          this.ownerCache = this.ownerCache.filter(owner => owner.name !== name);
          this.ownersSubject.next([...this.ownerCache]);
        }),
        catchError(error => {
          console.error('Error removing owner', error);
          return of(null);
        })
      )
      .subscribe();
  }

  findAll(): Observable<Owner[]> {
    return this.owners$;
  }
}