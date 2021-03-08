import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import  moment  from 'moment'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  topCustomers: string[]
  allOrders: any[]

  chartData: any[] = []
  chartLabels: any[] = []
  chartOptions: any = {}

  chartLegend = true
  chartType = "line"
  chartColors: any[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDrivesData(1,100).subscribe(d => {
      this.allOrders = d['page']['data']

      this.dataService.getOrdersByCustomer(3).subscribe(customers => {
        this.topCustomers = customers.map(x => x['name'])

        const allChartData = this.topCustomers.reduce((acc, i) => {
          acc.push(this.getChartData(this.allOrders, i))
          return acc
        },[])

        let dates = allChartData.map(x => x['data']).reduce((acc, i) => {
          acc.push(i.map(o => new Date(o[0])))
          return acc
        },[])
        //console.log("dates : ", dates)
        dates = [].concat.apply([], dates)
        //console.log("dates : ", dates)

        const result = this.getOrdersByDate(allChartData, dates)['data']
        //console.log("result :",result)

        this.chartLabels = result[0]['orders'].map(o => o['date'])
        this.chartData = [
          {'data':result[0]['orders'].map(x => x['total']), 'label': result[0]['customer']},
          {'data':result[1]['orders'].map(x => x['total']), 'label': result[1]['customer']},
          {'data':result[2]['orders'].map(x => x['total']), 'label': result[2]['customer']},
        ]
      })

      })
      //console.log(this.allOrders)
    }


  getChartData(allOrders: any, name: string) {
    const customerOrders = allOrders.filter(o => o.customer.name === name)
    //console.log('customerOrders:' , customerOrders)
    const formattedOrders = customerOrders.reduce((acc, i) => {
      acc.push([i.placed, i.total])
      return acc
    },[])
    //console.log("formatted orders: ",formattedOrders)

    const result = { customer: name, data: formattedOrders }
    //console.log("result : ", result)
    return result
  }

  getOrdersByDate(orders: any, dates: any) {
    //for each customer -> for each date ->
    //{data: [{'customer':'XYZ', 'orders': [{ 'date':'2020-11-25', 'total':5486}, {...}]}, {...}]}
    const customers = this.topCustomers
    const prettyDates = dates.map(date => this.toFriendlyDate(date))
    const uniqueDates = Array.from(new Set(prettyDates)).sort()
    //console.log(uniqueDates)

    //define result object to return
    const result = {}
    const dataSets = result['data'] = []

    customers.reduce((acc, current, i) => {
      //console.log('reducing : ', current, ' at index ', i)
      const customerOrders = []
      dataSets[i] = {
        customer: current,
        orders: uniqueDates.reduce((ac, cu, j) => {
          //console.log('reducing : ', cu, ' at index ', j)
          const obj = {}
          obj['date'] = cu
          obj['total'] = this.getCustomerDateTotal(cu, current) //sum total orders for this customer on this day
          customerOrders.push(obj)
          //console.log('reducing : ', cu, ' at index ', j, 'customerOrders : ', customerOrders)
          return customerOrders
        },[])
      }
      return acc
    },[])
    return result
  }

  toFriendlyDate(date:Date) {
    return moment(date).endOf('day').format('YY-MM-DD')
  }

  getCustomerDateTotal(date:any, customer:string) {
    const r = this.allOrders.filter(o => o.customer.name === customer && this.toFriendlyDate(o.placed) === date)

    const result = r.reduce((acc, i) => {
      //console.log("index", i)
      //console.log("index total: ", i.total)
      return acc + i.total
    }, 0)
    return result
  }
}
