import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Owner } from './owner';
import { Router } from '@angular/router';
import { OwnerService } from './owner-service';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'owner-list',
  imports: [FormsModule, ButtonModule, TableModule, PanelModule, AutoFocusModule, DividerModule],
  template: `
    <p-button (onClick)="startInsert()" autofocus="true">New</p-button>

    <p-divider />

    <p-panel header="List">
      <p-table 
    [value]="ownersList" 
    [rows]="3"
    [paginator]="true"
    [rowsPerPageOptions]="[3, 5, 10]"
>
    <ng-template #header>
        <tr>
            <th pSortableColumn="name">Name <p-sortIcon field="name" /></th>
            <th pSortableColumn="age">Age <p-sortIcon field="age" /></th>
            <th pSortableColumn="active">Status <p-sortIcon field="active" /></th>
            <th>Remove</th>
        </tr>
    </ng-template>
    <ng-template #body let-item>
        <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>
                <span [ngClass]="{ 'text-green-500': item.active, 'text-red-500': !item.active }">
                    {{ item.active ? 'Active' : 'Inactive' }}
                </span>
            </td>
            <td><p-button icon="pi pi-trash" (onClick)="remove(item)" /></td>
        </tr>
    </ng-template>
</p-table>

    </p-panel>
  `
})
export class OwnerListComponent {
  ownersList!: Array<Owner>
  router: Router
  ownerService: OwnerService

  constructor(private newRouter: Router, private newOwnerService: OwnerService) {
    this.router = newRouter;
    this.ownerService = newOwnerService
  }

  ngOnInit() {
    this.findAll()
  }

  remove(item: Owner) {
    this.ownerService.remove(item.name)

    this.findAll()
  }

  startInsert(): void {
    this.router.navigate(["owners/new"])
  }

  findAll(): void {
    this.ownersList = this.ownerService.findAll()
  }
}