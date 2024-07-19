import { Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'PersonalDashboardAugular';
  dateTime: Observable<Date>

  ngOnInit(){
    this.dateTime = timer(0, 1000).pipe(
      map(() =>{ return new Date()})
    )
  }
}
