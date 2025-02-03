import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageFeedbackComponent } from './page-feedback.component';

@Component({
  selector: 'app-root',
  template: `
    <main class="main">
      <div class="content">
        <!-- Usando o router-outlet para navegação dinâmica -->
        <router-outlet></router-outlet>

        <!-- Exemplo de inclusão do PageFeedbackComponent, se necessário -->
        <page-feedback (feedbackGiven)="handleFeedback($event)"></page-feedback>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    PageFeedbackComponent // Inclui PageFeedbackComponent
  ]
})
export class AppComponent {
  handleFeedback(feedback: boolean) {
    // Exemplo de lógica de feedback
    if (feedback) {
      console.log('Feedback positivo recebido!');
    } else {
      console.log('Feedback negativo recebido!');
    }
  }
}