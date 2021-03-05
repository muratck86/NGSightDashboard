import { Component, OnInit } from '@angular/core';
import { Scooter } from 'src/app/models/Scooter';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  zoom = 13
  center: google.maps.LatLngLiteral
  markers = []
  scooters: Scooter[] = []
  mapTypeId= "terrain"

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(p => {
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      }
    })
    this.generateMarkers()
    this.dataService.getAllScooters().subscribe(data => {
      this.scooters = data
    })
  }

  generateMarkers() {
    for (let scooter of this.scooters) {
      let icon:string
      if(scooter.scooterBatteryStatus < 10) {
        icon = "../../../assets/images/scooter-empty.svg"
      }
      else if(scooter.scooterBatteryStatus < 20) {
        icon = "../../../assets/images/scooter-critic.svg"
      } 
      else if (scooter.scooterBatteryStatus < 35) {
        icon = "../../../assets/images/scooter-quarter.svg"
      } 
      else if(scooter.scooterBatteryStatus < 60) {
        icon = "../../../assets/images/scooter-half.svg"
      }
      else if(scooter.scooterBatteryStatus < 85) {
        icon = "../../../assets/images/scooter-3quarters.svg"
      } 
      else {
        icon = "../../../assets/images/scooter-full.svg"
      }

      this.markers.push(
        {
          position: {
            lat: scooter.scooterCurrentPositionX,  //((Math.random() - 0.5) * 2) / 10,
            lng: scooter.scooterCurrentPositionY //((Math.random() - 0.5) * 2) / 10,
          },
          label: {
            text: scooter.scooterBatteryStatus + "%",
          },
          title: ""+scooter.id,
          options: { 
            animation: google.maps.Animation.BOUNCE,
            icon : icon
          },
        }
      )
    }

  }

}
