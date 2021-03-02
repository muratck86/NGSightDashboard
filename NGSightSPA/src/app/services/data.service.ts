import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SAMPLE_PIE_CHART, SAMPLE_BARCHART_DATA, SAMPLE_BARCHART_LABELS } from '../sample-data/sampleData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBarChartData(): Observable<any> {
    return of({ data: SAMPLE_BARCHART_DATA, labels: SAMPLE_BARCHART_LABELS })
  }
  getPieChartData(): Observable<any> {
    return of(SAMPLE_PIE_CHART)
  }
}
