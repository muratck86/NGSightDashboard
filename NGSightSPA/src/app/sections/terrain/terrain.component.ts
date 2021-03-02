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
  icon = "../../../assets/images/electric_scooter-48px.svg"

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(p => {
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      }
      this.generateMarkers()
    })
    this.dataService.getAllScooters().subscribe(data => {
      this.scooters = data
    })
  }

  generateMarkers() {
    for (let scooter of this.scooters) {
      let color:string
      if(scooter.scooterBatteryStatus < 40) {
        color = "green"
      } else if (scooter.scooterBatteryStatus < 75) {
        color = "yellow"
      } else {
        color = "blue"
      }

      if(scooter.scooterRate<5) {
        color = "red"
      }

      this.markers.push(
        {
          position: {
            lat: scooter.scooterCurrentPositionX,  //((Math.random() - 0.5) * 2) / 10,
            lng: scooter.scooterCurrentPositionY //((Math.random() - 0.5) * 2) / 10,
          },
          label: {
            color: color,
            text: scooter.scooterBatteryStatus + "%",
            //img: "../../../assets/images/battery-full.svg"
          },
          title: ""+scooter.id,
          options: { 
            //animation: google.maps.Animation.BOUNCE,
            icon: this.icon
          },
        }
      )
    }

  }

}
