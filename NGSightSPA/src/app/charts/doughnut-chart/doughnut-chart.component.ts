import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import _ from 'lodash';
import { THEME_COLORS } from 'src/app/models/theme-colors';

const theme = 'Bright'

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  @Input() inputData: any
  @Input() limit: number
  chartData:number[]=[]
  chartLabels:string[]
  chartType = "doughnut"
  colors: any[] = [{
    backgroundColor: this.themeColors(theme),
    borderColor:'#111'
  }
  ]

  ngOnInit(): void {
    this.parseChartData(this.inputData, this.limit)
  }

  parseChartData(res:any, limit?:number) {
    //console.log(res)
    const allData = res.slice(0,limit)
    //console.log(allData)
    this.chartData = allData.map(x => _.values(x)[1])
    this.chartLabels = allData.map(x => _.values(x)[0])
  }

  themeColors(setName:string):string[] {
    const c = THEME_COLORS.slice(0).find(set => set.name === setName).colorSet
    return c
  }
}
