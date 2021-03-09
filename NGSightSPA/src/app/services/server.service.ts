import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../models/constants/Constants.enum';
import { Server } from '../models/Server';
import { catchError, map } from 'rxjs/operators'
import { ServerMessage } from '../models/ServerMessage';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
    this.headers = new Headers({
      'Content-Type':'application/json',
      'Accept':'q=0.8;application/json;q=0.9'
    })
    this.options = {'headers': this.headers}
   }

  options
  headers: Headers

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(Constants.API_URL+Constants.SERVER).pipe(catchError(this.handleError))
  }

  handleError(error:any) {
    const errMsg = (error.message) ? error.message : 
      error.status ? `${error.status} - ${error.statusText}` :
        'Server error'

    console.log(errMsg)
    return Observable.throw(errMsg)
  }

  handleServerMessage(msg: ServerMessage):Observable<any> {
    return this.http.put(Constants.API_URL+Constants.SERVER + msg.id, msg, this.options)
  }
}
