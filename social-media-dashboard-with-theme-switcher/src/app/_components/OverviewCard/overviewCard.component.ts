import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'overviewCard-component',
  templateUrl: './overviewCard.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class OverviewCardComponent {
  @Input() title!: string;
  @Input() views!: string;
  @Input() percentage!: number;
  @Input() socialType!: 'facebook' | 'twitter' | 'instagram' | 'youtube';

  getAbsolutePercentage(): number {
    return Math.abs(this.percentage);
  }

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

  getChangeIcon(): string {
    return this.percentage >= 0
      ? '/images/icon-up.svg'
      : '/images/icon-down.svg';
  }
}
