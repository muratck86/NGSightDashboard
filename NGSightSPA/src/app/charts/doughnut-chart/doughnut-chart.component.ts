import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  pieChartData:number[]=[]
  colors= [{backgroundColor: ['#20647c', '#fa6b8b', '#ff3126']}]
  pieChartLabels:string[]
  pieChartType = "doughnut"

  ngOnInit(): void {
    this.dataService.getPieChartData().subscribe(d => {
      this.pieChartData = d.data
      this.pieChartLabels = d.labels
    })
  }

}
