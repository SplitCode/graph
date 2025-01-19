import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChartData } from '../models/chart-data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'assets/res.json';
  private readonly http = inject(HttpClient);

  getChartData(): Observable<ChartData> {
    return this.http.get<ChartData>(this.apiUrl);
  }
}
