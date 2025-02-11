import { Injectable } from "@angular/core";
import { Owner } from "./owner";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private beans: Owner[] = [];
  private ownersSubject = new BehaviorSubject<Owner[]>(this.beans);

  constructor() {}

  getOwners(): Observable<Owner[]> {
    return this.ownersSubject.asObservable(); // Retorna a lista como um Observable
  }

  insert(bean: Owner): void {
    this.beans.push(bean);
    this.ownersSubject.next([...this.beans]); // Notifica os componentes sobre a mudança
  }

  remove(id: string): void {
    this.beans = this.beans.filter(localBean => localBean.name !== id);
    this.ownersSubject.next([...this.beans]); // Atualiza os observadores
  }
}
