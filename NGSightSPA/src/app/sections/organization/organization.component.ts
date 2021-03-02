import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/models/Server';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(private dataService:DataService) { }

  servers: Server[]

  ngOnInit(): void {
    this.getServers()
  }

  getServers() {
    this.dataService.getServers().subscribe(s => {
      this.servers = s
    })
  }

}
