import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  public barChartData:any[]
  public barChartLabels:string[]
  public barChartType="bar"
  public barChartLegend = true
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive:true
  }

  ngOnInit(): void {
    this.dataService.getBarChartData().subscribe(d => {
      this.barChartData = d.data
      this.barChartLabels = d.labels
    })
  }

}
