import { Component } from '@angular/core';

@Component({
  selector: 'toggleSwitch-component',
  templateUrl: './toggleSwitch.component.html',
  standalone: true,
})
export class ToggleSwitchComponent {
  toggleTheme(): void {
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains('light')) {
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
    }
  }
}
