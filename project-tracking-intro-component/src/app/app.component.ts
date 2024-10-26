import { Component } from '@angular/core';
import { HeaderComponent } from './_components/header/header.component';
import { MainDashboard } from './_components/mainDashboard/mainDashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainDashboard],
  templateUrl: './app.component.html',
})
export class AppComponent {}
