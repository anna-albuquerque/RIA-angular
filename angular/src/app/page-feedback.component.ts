import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'page-feedback',
    templateUrl: './page-feedback.component.html',
    styleUrls: ['./page-feedback.component.scss'],
    standalone: true,  // Adicionando a propriedade `standalone`
    imports: [FormsModule] // Importando módulos necessários
  })
  export class PageFeedbackComponent {
    @Output() feedbackGiven = new EventEmitter<boolean>();
  
    giveFeedback(feedback: boolean) {
      this.feedbackGiven.emit(feedback);
    }
  }
  
