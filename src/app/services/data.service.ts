import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);

  getChartData(): Observable<any> {
    // заменить any на тип данных, который будет возвращать json
    return this.http.get('/assets/res.json');
  }
}
