import { Routes } from '@angular/router';
import { OwnerCrudComponent } from './owner-crud.component';
import { HelloComponent } from './hello.component';

export const routes: Routes = [
//  { path: '', redirectTo: 'hello', pathMatch: 'full' }, // Redireciona para a página inicial
  { path: '', component: OwnerCrudComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'owners', component: OwnerCrudComponent }
];
