import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Owner } from './owner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'owner-insert',
  standalone: true, // Necessário porque estamos usando `imports`
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule],
  template: `
    <p-panel header="Inserir">
      <label for="name">Nome: </label>
      <input pInputText [pAutoFocus]="true" [(ngModel)]="insertOwner.name" placeholder="Digite o nome" />
      <label for="age">Idade: </label>
      <input pInputText [(ngModel)]="insertOwner.age" type="number" placeholder="Digite a idade" />
      <label for="isActive">Ativo: </label>
      <p-toggleswitch [(ngModel)]="insertOwner.isActive"></p-toggleswitch>
      <p-button icon="pi pi-plus" (click)="insert()" label="Adicionar"></p-button>
    </p-panel>
  `
})
export class OwnerInsertComponent {
  insertOwner = new Owner('', 0, true);  // Inicializando com um valor padrão para idade e isActive

  @Output() insertOutEvent = new EventEmitter<Owner>();

  insert() {
    if (this.insertOwner.name.trim() && this.insertOwner.age >= 0) {  // Validação da idade
      this.insertOutEvent.emit(this.insertOwner);
      this.insertOwner = new Owner('', 0, true);  // Resetando após o envio
    }
  }
}
