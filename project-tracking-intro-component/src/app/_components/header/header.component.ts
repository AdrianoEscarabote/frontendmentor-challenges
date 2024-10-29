import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu aberto:', this.isMenuOpen);
  }
}
