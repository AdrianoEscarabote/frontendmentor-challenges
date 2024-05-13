import { Component, Input } from '@angular/core';

@Component({
  selector: 'faq-button-component',
  templateUrl: './faqButton.component.html',
})
export class FaqButtonComponent {
  @Input() question: string = '';
  @Input() answer: string = '';
  @Input() showAnswer: boolean = false;

  showAnswerFn() {
    this.showAnswer = !this.showAnswer;
  }
}
