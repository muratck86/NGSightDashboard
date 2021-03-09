import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Server } from 'src/app/models/Server';
import { ServerMessage } from 'src/app/models/ServerMessage';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit, OnDestroy {

  constructor(private serverService:ServerService) { }

  servers: Server[]
  refreshRate:number = 2000//ms

  ngOnInit(): void {

    this.refreshData()

  }

  ngOnDestroy(): void {

    if(this.serverObserver) {
      this.serverObserver
    }

  }

  refreshData() {
    this.serverService.getServers().subscribe(this.serverObserver)
    setTimeout(() => {
      this.refreshData()
    }, this.refreshRate);
    //this.subscribeToData(this.refreshRate)
  }


  serverObserver = {
    next: x => {
      this.servers = x
      //console.log("Server observer")
    }
  }

  sendMessage(msg: ServerMessage) {
    this.serverService.handleServerMessage(msg)
      .subscribe(res => {
        console.log('message sent to server: ', msg),
        err => console.log('Error', err)
      })
  }
}
