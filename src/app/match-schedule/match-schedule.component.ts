import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SharedServiceService } from '../shared/shared-service.service';
@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.css']
})
export class MatchScheduleComponent implements OnInit {

  constructor(private service: SharedServiceService, private router: Router) { }
  public matchSchedule: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  ngOnInit() {
    this.loadSchedule();
    
  }
  loadSchedule() {
    var date;
    this.service.loadMatchSchedule().subscribe(data => {
      // data.IPL2021.forEach(element => {
      //   console.log(element.match_date);

      //   date=new Date(element.match_date)
      //   // element.match_date=date.toDateString()
      // });
      this.matchSchedule.next(data.IPL2021);
      // console.log(this.matchSchedule.value[0].match_date);
      // console.log(date.toDateString());
    })
  }

  getResult(matchNo) {
    this.service.matchResult.next(this.matchSchedule.value[matchNo])
    this.router.navigateByUrl('match-result');
  }

}
