import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scooter, ScooterJson } from '../models/Scooter';
import { Server } from '../models/Server';
import getAllScooters from '../sample-data/getAllScooters.json';

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

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getServers():Observable<Server[]> {
    return of(SERVERS)
  }

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

  getAllScooters(): Observable<Scooter[]> {
    let scooters: Scooter[] = []
    for (let jsonScooter of getAllScooters.data) {
      scooters.push(this.createScooter(jsonScooter))
    }
    return of(scooters)
  }

  private createScooter(jsonScooter:ScooterJson):Scooter {
    let scooter = {
      id : jsonScooter.id,
      scooterName : jsonScooter.scooterName,
      scooterBarcode : jsonScooter.scooterBarcode,
      scooterDescription : jsonScooter.scooterDescription,
      scooterRate : jsonScooter.scooterRate,
      scooterImei : jsonScooter.scooterImei,
      scooterGsmNumber : jsonScooter.scooterGsmNumber,
      scooterCurrentPositionX : +jsonScooter.scooterCurrentPositionX,
      scooterCurrentPositionY : +jsonScooter.scooterCurrentPositionY,
      scooterBatteryStatus : +jsonScooter.scooterBatteryStatus,
    }
    return scooter
  }
}
