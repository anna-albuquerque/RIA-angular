import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `<h1>Olá, {{ helloName }}!</h1>`
})
export class HelloComponent {
  @Input() helloName: string = 'Aluno';
}