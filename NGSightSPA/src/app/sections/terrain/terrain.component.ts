import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { id } from '@swimlane/ngx-charts';
import { Observer, VirtualTimeScheduler } from 'rxjs';
import { Scooter } from 'src/app/models/Scooter';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit, OnDestroy {

  zoom = 13
  center: google.maps.LatLngLiteral
  markers = []
  markerOptions:any
  scooters: Scooter[] = []
  mapTypeId = "terrain"

  scooterObserver = {
    next: scooters => { //:Observer<Scooter[]>
      console.log("Refreshing data...")
      this.scooters = scooters
      //console.log("Scooters in observer "+this.scooters)
      this.refreshScooterStatus()
    }
  }

  refreshRate: number = 2000
  timeoutId

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(p => {
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      }
    })
    this.refreshScooters()
  }

  ngOnDestroy(): void {
    console.log("Destroy...")
    clearTimeout(this.timeoutId)
  }

  refreshScooters() {
      this.dataService.getAllScooters().subscribe(this.scooterObserver)
      this.timeoutId = setTimeout(() => {
        //console.log("Scooters in refreshScooters : "+this.scooters)
        this.refreshScooters()
      }, this.refreshRate);


  }

  refreshScooterStatus(){
    for (let i = 0; i < this.scooters.length ; i++) {
      //console.log("Scooter in refreshScooterStatus() for loop:" + this.scooters[i])
      let icon: string
      let battery: number = parseInt(this.scooters[i].scooterBattery)
      let latitude = parseFloat(this.scooters[i].scooterPositionY)
      let longitude = parseFloat(this.scooters[i].scooterPositionX)
      if (battery < 10) {
        icon = "../../../assets/images/scooter-empty.svg"
      }
      else if (battery < 20) {
        icon = "../../../assets/images/scooter-critic.svg"
      }
      else if (battery < 35) {
        icon = "../../../assets/images/scooter-quarter.svg"
      }
      else if (battery < 60) {
        icon = "../../../assets/images/scooter-half.svg"
      }
      else if (battery < 85) {
        icon = "../../../assets/images/scooter-3quarters.svg"
      }
      else {
        icon = "../../../assets/images/scooter-full.svg"
      }
      if(this.markers.length < this.scooters.length) {
        this.markers.push({})
      }
        this.markers[i].position = {
          lat: latitude,  //((Math.random() - 0.5) * 2) / 10,
          lng: longitude //((Math.random() - 0.5) * 2) / 10,
        },
        this.markers[i].label = {
          text: this.scooters[i].scooterBattery + "%",
        },
        this.markers[i].title= "" + this.scooters[i].id,
        this.markers[i].options= {
          icon: icon
        }
    };
  }
}
