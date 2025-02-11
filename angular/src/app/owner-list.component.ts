import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Owner } from './owner';
import { Router } from '@angular/router';
import { OwnerService } from './owner-service';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'owner-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, PanelModule, AutoFocusModule, DividerModule],
  template: `
    <p-button (onClick)="startInsert()" autofocus="true">New</p-button>

    <p-divider />

    <p-panel header="List">
      <p-table 
        [value]="ownersList$ | async" 
        [rows]="5"
        [paginator]="true"
        [rowsPerPageOptions]="[5, 10, 20]"
      >
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="name">Name <p-sortIcon field="name" /></th>
            <th pSortableColumn="age">Age <p-sortIcon field="age" /></th>
            <th pSortableColumn="isActive">Status <p-sortIcon field="isActive" /></th>
            <th>Remove</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-item>
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>
              <span [ngClass]="{ 'text-green-500': item.isActive, 'text-red-500': !item.isActive }">
                {{ item.isActive ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td>
              <p-button icon="pi pi-trash" (onClick)="remove(item)" />
            </td>
          </tr>
        </ng-template>
      </p-table>
    </p-panel>
  `
})
export class OwnerListComponent implements OnInit {
  ownersList$: Observable<Owner[]> = of([]); // Inicializando com um array vazio

  constructor(private router: Router, private ownerService: OwnerService) {}

  ngOnInit() {
    this.ownersList$ = this.ownerService.getOwners(); // Obtém a lista reativa
  }

  remove(item: Owner) {
    this.ownerService.remove(item.name);
  }

  startInsert(): void {
    this.router.navigate(["owners/new"]);
  }
}
