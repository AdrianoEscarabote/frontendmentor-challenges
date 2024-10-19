import { Component } from '@angular/core';
import { ToggleSwitchComponent } from '../ToggleSwitch/toggleSwitch.component';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [ToggleSwitchComponent],
})
export class HeaderComponent {}
