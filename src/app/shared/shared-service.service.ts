import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }
  public matchResult: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  loadMatchSchedule() {
    return this.http.get<any>('https://ipl2021-live.herokuapp.com/get_all_matches_refresh', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      })
    });
  }
  loadMatchResult(loadMatch) {
    // let matchNo=9;
    return this.http.get<any>('https://ipl2021-live.herokuapp.com/scorecard?match_no=' + loadMatch, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      })
    });
  }

  getTeams() {
   return this.http.get<any>("assets/teamArray.json");
  }

  // validate(){

  // }

}
