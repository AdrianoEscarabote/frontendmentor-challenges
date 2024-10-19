import { Component } from '@angular/core';
import { OverviewCardComponent } from '../OverviewCard/overviewCard.component';
import { StatsCardComponent } from '../StatsCard/statsCard.component';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [OverviewCardComponent, StatsCardComponent],
})
export class DashboardComponent {}
