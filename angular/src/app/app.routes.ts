import { Routes } from '@angular/router';
import { OwnerCrudComponent } from './owner-crud.component';
import { HelloComponent } from './hello.component';

export const routes: Routes = [
  { path: '', redirectTo: 'owners', pathMatch: 'full' },  // Redireciona para a página de owners
  { path: 'hello', component: HelloComponent },
  { path: 'owners', component: OwnerCrudComponent }
];