import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import moment from 'moment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  drives: any
  driveLabels: string[]
  driveData:number[]

  public barChartData:any[]
  public barChartLabels:string[]
  public barChartType="bar"
  public barChartLegend = true
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive:true
  }

  ngOnInit(): void {
    this.dataService.getDrivesData(1,100).subscribe(d => {
      //console.log(d['page']['data'])
      const localChartData = this.getChartData(d)
      //console.log(localChartData)
      this.barChartLabels = localChartData.map(x => x[0]).reverse()
      //console.log(this.barChartLabels)
      this.barChartData = [{'data': localChartData.map(x => x[1]), 'label':'Drives'}]
      //console.log("barchart data" + this.barChartData[0])
    })
  }

  getChartData(res) {
    this.drives = res['page']['data']
    const data = this.drives.map(d => d.total)
    const labels = this.drives.map(d =>moment(new Date(d.placed)).format('YY-MM-DD'))

    const formattedDrives = this.drives.reduce((r,e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total])
      return r
    }, []) 

    const p = []
    const chartData = formattedDrives.reduce((r,e) => {
      const date = e[0]
      if(!p[date]){
        p[date] = e
        r.push(p[date])
      }else {
        p[date][1] += e[1]
      }
      return r
    },[])
    return chartData
  }
}
