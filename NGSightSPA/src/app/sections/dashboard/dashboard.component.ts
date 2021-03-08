import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  customerStatusData: any
  scooterStatusData:any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOrdersByState().subscribe(res => {
      this.scooterStatusData = res
      //console.log(this.scooterStatusData)
    })
    this.dataService.getOrdersByCustomer(5).subscribe(res => {
      this.customerStatusData = res
    })
  }

}
