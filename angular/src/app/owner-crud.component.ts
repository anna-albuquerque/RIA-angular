import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwnerInsertComponent } from "./owner-insert.component";
import { OwnerListComponent } from './owner-list.component';
import { PanelModule } from 'primeng/panel';
import { Owner } from './owner';
import { DividerModule } from 'primeng/divider';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // Importação necessária

@Component({
  selector: 'owner-crud',
  encapsulation: ViewEncapsulation.None, // Permite que o CSS personalizado funcione
  standalone: true, 
  providers: [ConfirmationService], // Confirmação do PrimeNG
  imports: [
    FormsModule, 
    OwnerInsertComponent, 
    OwnerListComponent, 
    PanelModule, 
    DividerModule,
    ConfirmDialogModule // Certifica que o componente p-confirmDialog está disponível
  ],
  template: `
      <p-confirmDialog></p-confirmDialog>
        <app-hello>
        <p-divider></p-divider>
      <p-panel header="Lista de Presença">

        <owner-insert (insertOutEvent)="insert($event)"></owner-insert>
        
        <p-divider></p-divider>

        <owner-list 
          (removeOutEvent)="confirmRemove($event)" 
          [ownersList]="owners">
        </owner-list>
      </p-panel>
  `,
  styleUrls: ['./app.component.scss']
})
export class OwnerCrudComponent {
  owners: Owner[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  insert(owner: Owner) {
    this.owners.push(owner);
  }

  confirmRemove(owner: Owner) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja remover ${owner.name}?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',  
      rejectLabel: 'Não',  
      accept: () => this.remove(owner) // Remove apenas se o usuário confirmar
    });
  }

  remove(owner: Owner) {
    // Comparando agora o objeto completo ao invés de apenas o `name`:
    this.owners = this.owners.filter(o => o.name !== owner.name || o.age !== owner.age || o.isActive !== owner.isActive);
  }
}
