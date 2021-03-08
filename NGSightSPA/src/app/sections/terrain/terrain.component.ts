import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Component, OnInit } from '@angular/core';
import { id } from '@swimlane/ngx-charts';
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
  markers: any[] = []
  scooters: Scooter[] = []
  mapTypeId = "terrain"

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(p => {
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      }
    })
    this.dataService.getAllScooters().subscribe(data => {
      this.scooters = data
      this.generateMarkers()
    })
  }

  generateMarkers() {
    for (let scooter of this.scooters) {
      let icon: string
      let battery: number = parseInt(scooter.scooterBattery)
      let latitude = parseFloat(scooter.scooterPositionY)
      let longitude = parseFloat(scooter.scooterPositionX)
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

      this.markers.push(
        {
          position: {
            lat: latitude,  //((Math.random() - 0.5) * 2) / 10,
            lng: longitude //((Math.random() - 0.5) * 2) / 10,
          },
          label: {
            text: scooter.scooterBattery + "%",
          },
          title: "" + scooter.id,
          options: {
            animation: google.maps.Animation.DROP,
            icon: icon
          },
        }
      )
    }
  }
}
