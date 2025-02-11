import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from './owner-service';
import { Observable } from 'rxjs';
import { Owner } from './owner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'owner-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, PanelModule, AutoFocusModule, DividerModule],
  template: `
    <p-button (onClick)="startInsert()" autofocus="true" severity="success" >New</p-button>

    <p-divider />

    <p-panel header="List">
      <p-table 
        [value]="ownersList" 
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
              <p-button icon="pi pi-trash" (onClick)="remove(item)" severity="danger" />
            </td>
          </tr>
        </ng-template>
      </p-table>
    </p-panel>
  `
})
export class OwnerListComponent implements OnInit {
  ownersList: Owner[] = []; // Lista inicializada vazia

  constructor(private router: Router, private ownerService: OwnerService) {}

  ngOnInit() {
    this.ownerService.findAll().subscribe((owners) => {
      this.ownersList = owners || []; // Garante que a lista nunca seja `null`
    });
  }

  remove(item: Owner) {
    this.ownerService.remove(item.name);
  }

  startInsert(): void {
    this.router.navigate(["owners/new"]);
  }
}
