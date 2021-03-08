import { Component, OnInit } from '@angular/core';
import { Scooter } from 'src/app/models/Scooter';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-scooter-management',
  templateUrl: './scooter-management.component.html',
  styleUrls: ['./scooter-management.component.css']
})
export class ScooterManagementComponent implements OnInit {

  scooters:Scooter[]= []
  scooterOperations:string[]=["Lock", "Activate"]
  total = 0
  page = 1
  limit = 10
  loading: boolean

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getScooters()
  }

  getScooters() {
    this.dataService.getScooters(this.page >= 1 ? this.page: 1 , this.limit).subscribe(s => {
      this.scooters = s.page.data,
      this.total = s.page.total,
      this.loading = false
    })
  }

  goToPrevious(){
    if(this.page > 1){
      this.page--
      this.getScooters()
    }
  }

  goToNext(){
    if(this.page < Math.ceil(this.total / this.limit)){
      this.page++
      this.getScooters()
    }
    
  }
  goToPage(n:number):void {
    this.page = n
    this.getScooters()
  }
}
