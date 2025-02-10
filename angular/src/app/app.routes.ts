import { Routes } from '@angular/router';
import { OwnerCrudComponent } from './owner-crud.component';
import { OwnerListComponent } from './owner-list.component';
import { OwnerInsertComponent } from './owner-insert.component';
import { HelloComponent } from './hello.component';

export const routes: Routes = [
  { path: '', redirectTo: 'owners', pathMatch: 'full' }, // página exatamente até o "/"
  { path: '**', redirectTo: 'owners'},  // Redireciona para a página de owners batida salve todos
  { path: 'Hello', component: HelloComponent },
  { path: 'Owners', component: OwnerCrudComponent },
  { path:  'OwnersInsertComponet', component: OwnerInsertComponent},
  { path:  'OwnersListComponet', component: OwnerListComponent}
];