import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'graph-drawing-app';
}
