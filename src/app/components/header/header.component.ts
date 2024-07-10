import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentDate$!: Observable<Date>;

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    this.currentDate$ = interval(1000).pipe(
      startWith(0),
      map(() => new Date())
    );
  }
}
