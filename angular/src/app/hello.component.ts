import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `<h1>Olá, {{ validHelloName }}!</h1>`
})
export class HelloComponent {
  private _helloName: string = 'Aluno';

  @Input()
  set helloName(value: string) {
    this._helloName = value ? value.trim() : 'Aluno';
  }

  get helloName(): string {
    return this._helloName;
  }

  get validHelloName(): string {
    return this._helloName || 'Aluno';  // Garante que sempre terá um valor válido
  }
}
