import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos = [
    { nome: 'Produto 1', preco: 10.99, disponivel: true },
    { nome: 'Produto 2', preco: 20.99, disponivel: false }
  ];

  displayedColumns: string[] = ['nome', 'preco', 'disponivel', 'acoes'];
  editIndex: number | null = null;
  produtoEdit: any = { nome: '', preco: 0, disponivel: false };

  onAdd() {
    this.produtos.push({ ...this.produtoEdit });
    this.produtoEdit = { nome: '', preco: 0, disponivel: false };
  }

  onEdit(index: number) {
    this.editIndex = index;
    this.produtoEdit = { ...this.produtos[index] };
  }

  onUpdate() {
    if (this.editIndex !== null) {
      this.produtos[this.editIndex] = { ...this.produtoEdit };
      this.editIndex = null;
      this.produtoEdit = { nome: '', preco: 0, disponivel: false };
    }
  }

  onDelete(index: number) {
    this.produtos.splice(index, 1);
  }
}