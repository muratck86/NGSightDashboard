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
  page = 2
  limit = 6
  loading: boolean

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getScooters()
  }

  getScooters() {
    this.dataService.getScooters(this.page, this.limit).subscribe(s => {
      this.scooters = s[0],
      this.total = s[1],
      this.loading = false
    })
  }

  goToPrevious(){
    this.page--
    this.getScooters()
  }

  goToNext(){
    this.page++
    this.getScooters()
  }
  goToPage(n:number):void {
    this.page = n
    this.getScooters()
  }
}
