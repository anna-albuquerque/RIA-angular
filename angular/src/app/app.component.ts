import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Caso use o roteamento
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Inclui o FormsModule e o RouterOutlet
  template: `
      <main class="main">
          <div class="content">
            <div class="left-side">
              <h1>Hello, {{ name }}</h1>
              <label for="name">Name: </label>
              <input [(ngModel)]="name">
              <h2>...:::Testes para ver como ficam aqui abaixo:::...</h2>
              <button [class.button-new]="isNew">Click here</button>
              <p [style.color]="textColor">This text has a dynamic color</p>
              <button [class.button-new]="isNew ? true : false">Click here</button>
              <button [class.button-enabled]="isNew && !isFilled">Click here</button>
              <input [(ngModel)]="classCSS" [class]="classCSS"> 
            </div>
          </div>
      </main>
  `,
  styleUrls: ['./app.component.scss'] // Corrige para styleUrls no plural
})
export class AppComponent {
  title = 'angular';
  name = '';
  isNew = false;
  textColor = 'black'; // Exemplo de valor para textColor
  isFilled = true; // Exemplo de valor para isFilled
  classCSS = 'default-class'; // Exemplo de valor para classCSS
}
