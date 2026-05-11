import { Component } from '@angular/core';
import { GlucoseDashboard } from './glucose-dashboard/glucose-dashboard';

@Component({
  selector: 'app-root',
  imports: [GlucoseDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
