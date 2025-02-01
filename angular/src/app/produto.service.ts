import { Injectable } from '@angular/core';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    new Produto('Produto 1', 100, true),
    new Produto('Produto 2', 150, false),
    new Produto('Produto 3', 200, true)
  ];

  constructor() {}

  getAll(): Produto[] {
    return this.produtos;
  }

  get(id: number): Produto {
    return this.produtos[id];
  }

  add(produto: Produto): void {
    this.produtos.push(produto);
  }

  update(id: number, produto: Produto): void {
    this.produtos[id] = produto;
  }

  remove(id: number): void {
    this.produtos.splice(id, 1);
  }
}
