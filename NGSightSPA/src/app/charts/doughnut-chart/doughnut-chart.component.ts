import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  chartData:number[]=[]
  chartLabels:string[]
  chartType = "doughnut"

  ngOnInit(): void {
    this.dataService.getScooterStatus().subscribe(d => {
      this.chartData = d.data
      this.chartLabels = d.labels
    })
  }

}