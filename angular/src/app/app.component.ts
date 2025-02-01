import { Component } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: Produto[] = [];
  produtoEdit: Produto = new Produto('', 0, false);
  editIndex: number | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtos = this.produtoService.getAll();
  }

  onAdd() {
    this.produtoService.add(this.produtoEdit);
    this.produtoEdit = new Produto('', 0, false); // Limpar após adicionar
    this.produtos = this.produtoService.getAll();
  }

  onEdit(index: number) {
    this.editIndex = index;
    this.produtoEdit = { ...this.produtos[index] };
  }

  onUpdate() {
    if (this.editIndex !== null) {
      this.produtoService.update(this.editIndex, this.produtoEdit);
      this.produtos = this.produtoService.getAll();
      this.produtoEdit = new Produto('', 0, false);
      this.editIndex = null;
    }
  }

  onDelete(index: number) {
    this.produtoService.remove(index);
    this.produtos = this.produtoService.getAll();
  }
}
