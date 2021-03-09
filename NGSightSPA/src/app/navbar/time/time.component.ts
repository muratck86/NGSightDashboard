import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import moment from '../../../../node_modules/moment'

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time = new Observable<string>(observer => {
    let date = new Date()
    setInterval(() => observer.next(moment(new Date()).format('HH:mm:ss DD-MM-YYYY')), 1000);
  });

  constructor() { }

  ngOnInit() {
  }

}
