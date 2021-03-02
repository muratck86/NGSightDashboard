import { Component, OnInit } from '@angular/core';
import { SAMPLE_BARCHART_DATA } from 'src/app/sample-data/sampleData';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  public barChartData:any[] = this.dataService.getBarChartData().data
  public barChartLabels:string[] = this.dataService.getBarChartData().labels
  public barChartType="bar"
  public barChartLegend = true
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive:true
  }

  ngOnInit(): void {
  }

}
