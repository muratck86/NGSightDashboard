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

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getScooters()
  }

  getScooters() {
    this.dataService.getAllScooters().subscribe(s => {
      this.scooters = s
    })
  }
}
