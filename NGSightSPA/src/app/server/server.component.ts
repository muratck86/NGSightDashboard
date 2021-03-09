import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Server } from '../models/Server';
import { ServerMessage } from '../models/ServerMessage';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color:string
  buttonText: string
  serverStatus: string
  isLoading:boolean

  @Input() serverInput: Server
  @Output() serverAction = new EventEmitter<ServerMessage>()

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline)
  }

  setServerStatus(isOnline:boolean) {
    if(isOnline) {
      this.serverInput.isOnline = true
      this.serverStatus = "Online"
      this.color = '#66bb6a'
      this.buttonText = 'Shut Down'
    } else {
      this.serverInput.isOnline = false
      this.serverStatus = "Offline"
      this.color = '#ff6b6b'
      this.buttonText = 'Start'
    }
  }

  sendServerAction(isOnline:boolean) {
    this.makeLoading()
    const payload = this.buildPayload(isOnline)
    this.serverAction.emit(payload)
  }

  makeLoading() {
    this.color = '#ffca28'
    this.buttonText = 'Pending...'
    this.isLoading = true
    this.serverStatus = "Loading..."
  }

  buildPayload(isOnline:boolean):ServerMessage {
    if(isOnline) {
      return {
        id: this.serverInput.id,
        payload: 'deactivate'
      } 
    }else {
      return {
        id: this.serverInput.id,
        payload: 'activate'
      }
    }
  }
}
