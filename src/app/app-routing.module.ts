import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchResultComponent } from './match-result/match-result.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { PlayGamesComponent } from './play-games/play-games.component';


const routes: Routes = [
  {
    path: 'match-result',
    // path:'',
    component: MatchResultComponent
  },
  {
    path: 'match-schedule',
    // path:'',
    component: MatchScheduleComponent
  },
  {
    // path: 'play-games',
    path:'',
    component: PlayGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
