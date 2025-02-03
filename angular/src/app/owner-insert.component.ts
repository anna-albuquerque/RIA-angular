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
      <input pInputText [pAutoFocus]="true" [(ngModel)]="insertOwner.name" placeholder="digite o nome" />
      <p-button icon="pi pi-plus" (click)="insert()" label="Adicionar"></p-button>
    </p-panel>
  `
})
export class OwnerInsertComponent {
  insertOwner = new Owner('');

  @Output() insertOutEvent = new EventEmitter<Owner>();

  insert() {
    if (this.insertOwner.name.trim()) {
      this.insertOutEvent.emit(this.insertOwner);
      this.insertOwner = new Owner('');
    }
  }
}