import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from './services/item.service';
import { Item } from './models/item.model';
import { ItemDialogComponent } from './item-dialog.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
//  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'quantidade', 'ativo', 'acoes'];
  itens: Item[] = [];

  constructor(private itemService: ItemService, private dialog: MatDialog) {}

  ngOnInit() {
    this.itemService.listar().subscribe(itens => (this.itens = itens));
  }

  abrirDialogo(item?: Item) {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '400px',
      data: item ? { ...item } : { nome: '', quantidade: 0, ativo: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.itemService.atualizar(result);
        } else {
          this.itemService.inserir(result);
        }
      }
    });
  }

  remover(id: number) {
    this.itemService.remover(id);
  }
}