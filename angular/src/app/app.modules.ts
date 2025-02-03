import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OwnerCrudComponent } from './owner-crud.component';
import { HelloComponent } from './hello.component';
// Definindo as rotas
const routes: Routes = [
  { path: '', component: OwnerCrudComponent },  // Rota padrão para exibir OwnerCrudComponent
  // Adicione outras rotas, se necessário
];

@NgModule({
  declarations: [
    AppComponent,
    OwnerCrudComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Configuração das rotas no módulo principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
