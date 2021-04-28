import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayGamesComponent } from './play-games.component';

describe('PlayGamesComponent', () => {
  let component: PlayGamesComponent;
  let fixture: ComponentFixture<PlayGamesComponent>;

  beforeEach(waitForAsync(() => {
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
