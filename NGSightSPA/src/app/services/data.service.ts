import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Scooter } from '../models/Scooter';
import { HttpClient } from '@angular/common/http'
import {Constants} from '../models/constants/Constants.enum'

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
import { Server } from '../models/Server';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getDrivesData(pageNo:number, pageSize:number): Observable<Drive[]> {
    return this.http.get<Drive[]>(Constants.API_URL+Constants.ORDER+pageNo+"/"+pageSize)
  }

  getAllScooters(): Observable<Scooter[]> {
    return this.http.get<Scooter[]>(Constants.API_URL + Constants.SCOOTER)
  }

  getScooters(pageNo:number, limit:number):Observable<any> {
    return this.http.get(Constants.API_URL+Constants.SCOOTER+pageNo+'/'+limit)
  }

  getOrdersByCustomer(n : number):Observable<Drive[]>{
    return this.http.get<Drive[]>(Constants.API_URL + Constants.ORDER+'ByCustomer/'+n)
  }

  getOrdersByState(){
    return this.http.get(Constants.API_URL + Constants.ORDER+'ByState/')
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
