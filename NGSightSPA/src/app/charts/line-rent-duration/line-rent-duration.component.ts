import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-line-rent-duration',
  templateUrl: './line-rent-duration.component.html',
  styleUrls: ['./line-rent-duration.component.scss']
})
export class LineRentDurationComponent implements OnInit {

  monthlyRentDurationData: any[] = []
  chartLabels: any[] = []
  chartOptions: any = {}
  chartLegend = true
  chartType = "line"
  chartColors: any[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMonthlyRentDurations().subscribe(d => {
      this.monthlyRentDurationData = d.dataset
      this.chartLabels = d.labels
      this.chartColors = d.colors
    })
    this.chartOptions = {
      responsive: true
    }

  }

}
