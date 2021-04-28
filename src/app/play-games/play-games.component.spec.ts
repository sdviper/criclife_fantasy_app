import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGamesComponent } from './play-games.component';

describe('PlayGamesComponent', () => {
  let component: PlayGamesComponent;
  let fixture: ComponentFixture<PlayGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
