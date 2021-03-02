import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { 
  SAMPLE_PIE_CHART,
  SAMPLE_BARCHART_DATA,
  SAMPLE_BARCHART_LABELS,
  SAMPLE_SCOOTER_STATUS,
  MONTHLY_RENTS,
  MONTHLY_RENTS_DURATION,
  ACTIVE_PASSIVE_CUSTOMERS

} from '../sample-data/sampleData';

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

  getScooterStatus(): Observable<any> {
    return of(SAMPLE_SCOOTER_STATUS)
  }

  getMonthlyRents():Observable<any> {
    return of(MONTHLY_RENTS)
  }

  getMonthlyRentDurations():Observable<any> {
    return of(MONTHLY_RENTS_DURATION)
  }

  getCustomerStatusRates():Observable<any> {
    return of(ACTIVE_PASSIVE_CUSTOMERS)
  }
}
