import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scooter } from '../models/Scooter';
import { Server } from '../models/Server';
import { HttpClient } from '@angular/common/http'

import { 
  SAMPLE_PIE_CHART,
  SAMPLE_BARCHART_DATA,
  SAMPLE_BARCHART_LABELS,
  SAMPLE_SCOOTER_STATUS,
  MONTHLY_RENTS,
  MONTHLY_RENTS_DURATION,
  ACTIVE_PASSIVE_CUSTOMERS,
  SERVERS

} from '../sample-data/sampleData';
import { Drive } from '../models/Drive';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:5000'

  constructor(private http:HttpClient) { }


  getDrivesData(pageNo:number, pageSize:number): Observable<Drive[]> {
    return this.http.get<Drive[]>(this.apiUrl+"/order/"+pageNo+"/"+pageSize)
  }

  getAllScooters(): Observable<Scooter[]> {
    return this.http.get<Scooter[]>(this.apiUrl + '/scooter')
  }

  getScooters(pageNo:number, limit:number):Observable<any> {
    return this.http.get(this.apiUrl+'/scooter/'+pageNo+'/'+limit)
  }

  getOrdersByCustomer(n : number):Observable<Drive[]>{
    return this.http.get<Drive[]>(this.apiUrl + '/order/ByCustomer/'+n)
  }

  getOrdersByState(){
    return this.http.get(this.apiUrl + '/order/ByState/')
  }

//-----------mocks------
  getServers():Observable<Server[]> {
    return of(SERVERS)
  }

  getPieChartData(): Observable<any> {
    return of(SAMPLE_PIE_CHART)
  }

  getScooterStatus(): Observable<any> {
    return of(SAMPLE_SCOOTER_STATUS)
  }

  getMonthlyRentDurations():Observable<any> {
    return of(MONTHLY_RENTS_DURATION)
  }

  getCustomerStatusRates():Observable<any> {
    return of(ACTIVE_PASSIVE_CUSTOMERS)
  }

}
