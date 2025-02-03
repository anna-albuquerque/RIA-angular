import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OwnerCrudComponent } from './owner-crud.component';
import { routes } from './app.routes';  // Importe as rotas

@NgModule({
  declarations: [
  ],
    imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    AppComponent,
    OwnerCrudComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Adicione isso aqui
//  bootstrap: [AppComponent]
})
export class AppModule { }
