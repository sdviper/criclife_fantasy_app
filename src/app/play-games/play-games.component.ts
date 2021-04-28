import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SharedServiceService } from '../shared/shared-service.service';

import {
  ArrayLike,
  selection,
  select,
  selectAll,
  Selection,
  event
} from 'd3-selection';
import * as D3 from 'd3';
@Component({
  selector: 'app-play-games',
  templateUrl: './play-games.component.html',
  styleUrls: ['./play-games.component.css']
})
export class PlayGamesComponent implements OnInit {

  constructor(private service: SharedServiceService) { }
  public matchSchedule: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  todayMatch = [];
  todayMatchName;
  matchResult;

  firstInningsPPRuns = 0;
  firstInningsMORuns = 0;
  firstInningsDORuns = 0;
  firstInningsPPWickets = 0;
  firstInningsMOWickets = 0;
  firstInningsDOWickets = 0;
  firstInningsPPPoints = 0;
  firstInningsMOPoints = 0;
  firstInningsDOPoints = 0;

  secondInningsPPRuns = 0;
  secondInningsMORuns = 0;
  secondInningsDORuns = 0;
  secondInningsPPWickets = 0;
  secondInningsMOWickets = 0;
  secondInningsDOWickets = 0;
  secondInningsPPPoints = 0;
  secondInningsMOPoints = 0;
  secondInningsDOPoints = 0;

  ngOnInit() {
    this.service.loadMatchSchedule().subscribe(data => {
      this.matchSchedule.next(data.IPL2021);
      // console.log(data);
    })
    
    // select("#")
    console.log(this.matchSchedule);

    this.getTodayMatch()
    this.getValidation()

    
    // let s=select('#firstPPRun')
    // console.log(s);
  }
  // ngAfterViewInit(){
  //   // console.log(this.matchSchedule);
    
  //   let s=select('#firstPP')._groups[0][0].classList.add('hideField')
  //   console.log(select('#firstPP')._groups[0]);

  // }

  getTodayMatch() {
    this.service.loadMatchSchedule().subscribe(data => {
      this.matchSchedule.next(data.IPL2021);
      console.log(this.matchSchedule.value);
      let today = new Date()
      let dd: any = today.getDate();
      let mm: any = today.getMonth() + 1;
      // let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      let currentDate = dd + '/' + mm + '/' + today.getFullYear();
      console.log(currentDate);
      this.matchSchedule.value.forEach(element => {
        if (currentDate === element.match_date) {
          this.todayMatch.push(element)
          console.log(this.todayMatch);
          this.todayMatchName=this.todayMatch[0].match_name
          console.log(this.todayMatchName);
        }
      });
      console.log(this.todayMatch[0]);
      this.service.loadMatchResult(this.todayMatch[0].match_no).subscribe(data=>{
        console.log(data);
        if(data!==null){

          this.matchResult=data
        }
      })
    })
    

  }
  predict() {

    // console.log(this.ss.value);
    console.log(this.firstInningsPPRuns);
    
    let s=select('#firstPPRun')
    console.log(s._groups);
    
    // s.forEach(element => {
      
    //   console.log(element);
    // });

    console.log(this.todayMatch[0]);
  
    //! validations pending
    // if(this.firstInningsPPRuns===null)
    //   this.firstInningsPPRuns=0

    let postObject = {
      "match_no": this.todayMatch[0].match_no,
      "player_name": "",
      "total_points": 0,
      "predictions": {
        "firstInnings": [
          {
            "runs": this.firstInningsPPRuns,
            "wickets": this.firstInningsPPWickets,
            "points": 0
          },
          {
            "runs": this.firstInningsMORuns,
            "wickets": this.firstInningsMOWickets,
            "points": 0
          }, {
            "runs": this.firstInningsDORuns,
            "wickets": this.firstInningsDOWickets,
            "points": 0
          }
        ]
        ,

        "secondInnings": [
          {
            "runs": this.secondInningsPPRuns,
            "wickets": this.secondInningsPPWickets,
            "points": 0
          },
          {
            "runs": this.secondInningsMORuns,
            "wickets": this.secondInningsMOWickets,
            "points": 0
          }, {
            "runs": this.secondInningsDORuns,
            "wickets": this.secondInningsDOWickets,
            "points": 0
          }
        ]
      }

    }
    console.log(postObject);
    
  }
  getValidation() {
    // let s=select('#firstPPRun')
    // console.log(s);
    
    // let a="0.1"
    // let b="6.4"
    // if(a>'0'){
    //   console.log(12333);
      
    // }
    this.service.loadMatchResult(19).subscribe(data=>{
      console.log(data);
      if(data.Innings1[2].overs > "0"){
        
        
      }else if(data.Innings1[2].overs > ""){
        
      }else if(data.Innings1[2].overs > "16"){
        
      }else if(data.Innings2[2].overs <= "16"){
        
      }else if(data.Innings2[2].overs > "6"){
        
      }else if(data.Innings2[2].overs > "6"){
        
      }else{

      }
      
    })


  }

}
