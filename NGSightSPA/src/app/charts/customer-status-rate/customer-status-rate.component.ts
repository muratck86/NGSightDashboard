import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer-status-rate',
  templateUrl: './customer-status-rate.component.html',
  styleUrls: ['./customer-status-rate.component.scss']
})
export class CustomerStatusRateComponent implements OnInit {

  constructor(private dataService:DataService) { }

  chartData:number[]=[]
  chartLabels:string[]
  chartType = "doughnut"
  colors= [{backgroundColor: ['#26547c', '#000']}]

  ngOnInit(): void {
    this.dataService.getCustomerStatusRates().subscribe(d => {
      this.chartData = d.data
      this.chartLabels = d.labels
    })
  }

}
