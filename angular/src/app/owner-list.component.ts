import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Owner } from './owner';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
  selector: 'owner-list',
  standalone: true, // Necessário porque estamos usando `imports`
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, PanelModule, AutoFocusModule, ToggleSwitch],
  template: `
    <p-toggleswitch [(ngModel)]="checked1"/>
    <p-panel header="Lista">
      <p-table 
        [value]="ownersList" 
        [rows]="5"
        [paginator]="true"
        [rowsPerPageOptions]="[5, 10, 15]"
      >
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="name" style="width:60%">
              Nome <p-sortIcon field="name"></p-sortIcon>
            </th>
            <th>Remover</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-item>
          <tr>
            <td>{{ item.name }}</td>
            <td><p-button icon="pi pi-trash" (click)="remove(item)" label="Remove"></p-button></td>
          </tr>
        </ng-template>
      </p-table>
    </p-panel>
  `
})
export class OwnerListComponent {
  @Input() ownersList: Array<Owner> = [];

  @Output() removeOutEvent = new EventEmitter<Owner>();

  remove(item: Owner) {
    this.removeOutEvent.emit(item);
  }

  checked1: boolean = true;  // Se você precisa desse valor, mova para aqui ou para o AppComponent
}
