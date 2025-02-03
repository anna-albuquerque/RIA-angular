import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { OwnerCrudComponent } from './owner-crud.component';
import { PageFeedbackComponent } from './page-feedback.component';

@Component({
  selector: 'app-root',
  template: `
    <main class="main">
      <div class="content">
        <!-- Exemplo de inclusão do HelloComponent -->
        <hello></hello>
        <!-- Exemplo de inclusão do OwnerCrudComponent -->
        <owner-crud></owner-crud>
        <!-- Exemplo de inclusão do PageFeedbackComponent -->
        <page-feedback (feedbackGiven)="handleFeedback($event)"></page-feedback>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    HelloComponent,      // Certifique-se de importar o HelloComponent
    OwnerCrudComponent,  // Certifique-se de importar o OwnerCrudComponent
    PageFeedbackComponent // Certifique-se de importar o PageFeedbackComponent
  ],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppComponent {
  handleFeedback(feedback: boolean) {
    console.log('Feedback recebido:', feedback);
  }
}
