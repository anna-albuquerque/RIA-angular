import { OwnerCrudComponent } from './owner-crud.component';
import { HelloComponent } from './hello.component';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Importando o RouterModule

const routes: Routes = [
  { path: '', component: OwnerCrudComponent },  // Rota padrão para exibir OwnerCrudComponent
  // outras rotas, se necessário
];

@Component({
  selector: 'app-root',
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <router-outlet></router-outlet>  <!-- Usando router-outlet -->
        </div>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Tornando este componente standalone
  imports: [RouterModule, HelloComponent, OwnerCrudComponent]  // Importando o RouterModule no AppComponent
})
export class AppComponent {}
