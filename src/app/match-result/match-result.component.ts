import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared/shared-service.service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {

  constructor(private service: SharedServiceService) { }
  matchNo;
  matchResult;
  firstInningsBatsman;
  firstInningsBowlers;
  secondInningsBatsman;
  secondInningsBowlers;
  firstTeam;
  secondTeam;
  teamList;
  first;
  ngOnInit() {
    this.service.getTeams().subscribe(data => {
      this.teamList = data.teams;
      let flag = false;
      // this.teamList[0].players.forEach(element => {
      //   // if (element === 'Ruturaj Gaikwad') {
      //     console.log(element);

      //   // }
      // });


      // for (let i = 0; i < this.teamList.length; i++) {
      //   console.log(this.teamList[i].players);
      //   // if(this.teamList[0].playes.indexOf('Ruturaj Gaikwad'))
      //   this.teamList[i].players.forEach(element => {

      //     if (element === ' Ruturaj Gaikwad') {
      //       console.log(element);
      //       console.log(this.teamList[i].team);

      //     }
      //   });

      // }

      // this.teamList.forEach(element => {
      //   // if()
      //   console.log(element.players);

      //   if (element.players.indexOf(' Ruturaj Gaikwad') == 0) {
      //     this.first = element.team
      //   }
      // });
      // console.log(this.first);

    });

    if (this.service.matchResult.value !== null) {
      this.loadMatchResult();
      this.service.matchResult.next(this.service.matchResult.value)
    }
  }
  loadMatchResult() {




    this.firstTeam = (this.service.matchResult.value.match_name.split(',')[0]).split('vs')[0]
    this.secondTeam = (this.service.matchResult.value.match_name.split(',')[0]).split('vs')[1]
    
    
    
    
    this.service.loadMatchResult(this.service.matchResult.value.match_no).subscribe(data => {
      console.log(data);
      this.firstInningsBatsman = data.Innings1[0].Batsman
      this.firstInningsBowlers = data.Innings1[1].Bowlers
      this.secondInningsBatsman = data.Innings2[0].Batsman
      this.secondInningsBowlers = data.Innings2[1].Bowlers
      
      // for (let i = 0; i < this.teamList.length; i++) {
      //   console.log(this.teamList[i].players);
      //   this.teamList[i].players.forEach(element => {

      //     if (element == this.firstInningsBatsman[0].name) {
      //       console.log(element);
      //       console.log(this.teamList[i].team);
      //     }
      //   });

      // }
      this.matchResult = data.result.update
    })
  }

}
