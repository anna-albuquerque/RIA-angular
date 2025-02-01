import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itens: Item[] = [];
  private itensSubject = new BehaviorSubject<Item[]>(this.itens);

  constructor() {}

  listar() {
    return this.itensSubject.asObservable();
  }

  inserir(item: Item) {
    item.id = this.itens.length + 1;
    this.itens.push(item);
    this.atualizarLista();
  }

  atualizar(item: Item) {
    const index = this.itens.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.itens[index] = item;
      this.atualizarLista();
    }
  }

  remover(id: number) {
    this.itens = this.itens.filter(i => i.id !== id);
    this.atualizarLista();
  }

  obterPorId(id: number): Item | undefined {
    return this.itens.find(i => i.id === id);
  }

  private atualizarLista() {
    this.itensSubject.next([...this.itens]);
  }
}