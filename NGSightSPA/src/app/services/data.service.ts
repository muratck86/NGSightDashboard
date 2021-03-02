import { Injectable } from '@angular/core';
import { SampleData, SAMPLE_BARCHART_DATA, SAMPLE_BARCHART_LABELS } from '../sample-data/sampleData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor() { }

getBarChartData(){
  return {data: SAMPLE_BARCHART_DATA, labels: SAMPLE_BARCHART_LABELS}
}
}
