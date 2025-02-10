import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { DividerModule } from 'primeng/divider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Owner } from './owner';
import { OwnerService } from './owner-service';

@Component({
  selector: 'owner-insert-template',
  standalone: true,
  imports: [
    FormsModule, 
    ButtonModule, 
    InputTextModule, 
    PanelModule, 
    AutoFocusModule, 
    DividerModule, 
    ToggleButtonModule, 
    CommonModule
  ],
  template: `
    <form #insertForm="ngForm">
      <p-panel header="Insert">
        <label for="name">Name:</label>
        <input id="name" 
          name="inputName"
          pInputText 
          [pAutoFocus]="true" 
          placeholder="Name to be inserted" 
          #inputName="ngModel" 
          [(ngModel)]="insertOwner.name" 
          required 
          minlength="3" />
          
        <div *ngIf="inputName.invalid && (inputName.dirty || inputName.touched)" class="alert">
          <div *ngIf="inputName.errors?.['required']">Name is required.</div>
          <div *ngIf="inputName.errors?.['minlength']">Name must be at least 3 characters long.</div>
        </div>

        <p-divider></p-divider>

        <label for="age">Age: </label>
        <input pInputText [(ngModel)]="insertOwner.age" name="inputAge" type="number" placeholder="Enter age" required />

        <p-divider></p-divider>

        <label for="active">Active: </label>
        <p-toggleButton [(ngModel)]="insertOwner.isActive" name="inputActive"></p-toggleButton>

        <p-divider></p-divider>

        <p-button icon="pi pi-check" (onClick)="insert(insertForm)" [disabled]="inputName.invalid" [style]="{'margin-right': '10px'}"></p-button>
        <p-button icon="pi pi-times" (onClick)="cancelInsert(insertForm)"></p-button>
      </p-panel>
    </form>
  `
})
export class OwnerInsertComponent {
  insertOwner: Owner = new Owner("", 0, false);

  constructor(private router: Router, private ownerService: OwnerService) {}

  insert(form: NgForm) {
    this.ownerService.insert(this.insertOwner);
    form.resetForm(); // Reseta o formulário após a inserção
    this.router.navigate(["owners"]);
  }

  cancelInsert(form: NgForm) {
    form.resetForm();
    this.router.navigate(["owners"]);
  }
}
