import { Component } from '@angular/core';
import { DashboardComponent } from './_components/Dashboard/dashboard.component';
import { ToggleSwitchComponent } from './_components/ToggleSwitch/toggleSwitch.component';
import { HeaderComponent } from './_components/Header/header.component';
import { StatsCardComponent } from './_components/StatsCard/statsCard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    DashboardComponent,
    ToggleSwitchComponent,
    HeaderComponent,
    StatsCardComponent,
  ],
})
export class AppComponent {}
