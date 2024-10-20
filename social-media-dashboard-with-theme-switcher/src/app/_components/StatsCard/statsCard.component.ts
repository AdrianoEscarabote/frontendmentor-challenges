import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'statsCard-component',
  templateUrl: './statsCard.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class StatsCardComponent {
  @Input() username!: string;
  @Input() number!: string;
  @Input() followersLabel!: string;
  @Input() changeToday!: number;
  @Input() socialType!: 'facebook' | 'twitter' | 'instagram' | 'youtube';

  getSocialIcon(): string {
    switch (this.socialType) {
      case 'facebook':
        return '/images/icon-facebook.svg';
      case 'twitter':
        return '/images/icon-twitter.svg';
      case 'instagram':
        return '/images/icon-instagram.svg';
      case 'youtube':
        return '/images/icon-youtube.svg';
      default:
        return '';
    }
  }

  getAbsoluteNumber(): number {
    return Math.abs(this.changeToday);
  }

  getChangeIcon(): string {
    return this.changeToday >= 0
      ? '/images/icon-up.svg'
      : '/images/icon-down.svg';
  }
}
