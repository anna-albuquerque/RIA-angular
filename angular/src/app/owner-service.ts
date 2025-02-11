import { Injectable } from "@angular/core";
import { Owner } from "./owner";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private ownersSubject = new BehaviorSubject<Owner[]>([]);
  owners$: Observable<Owner[]> = this.ownersSubject.asObservable();

  private beans: Owner[] = [];

  createBean(): Owner {
    return new Owner("", 0, true);
  }

  insert(bean: Owner): void {
    this.beans.push(bean);
    this.ownersSubject.next([...this.beans]); // Atualiza a lista de forma reativa
  }

  remove(id: string): void {
    let index = this.beans.findIndex(localBean => localBean.name === id);
    if (index > -1) {
      this.beans.splice(index, 1);
      this.ownersSubject.next([...this.beans]); // Atualiza a lista de forma reativa
    }
  }

  findAll(): Observable<Owner[]> {
    return this.owners$;
  }
}