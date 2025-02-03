import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importando RouterModule
import { AppComponent } from './app.component';
import { OwnerCrudComponent } from './owner-crud.component';
import { HelloComponent } from './hello.component';

// Importando as rotas a partir de um arquivo separado
import { routes } from './app.routes';  // Supondo que o arquivo de rotas seja app.routes.ts

@NgModule({
  declarations: [
    AppComponent,
    OwnerCrudComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Usando as rotas importadas de app.routes.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
