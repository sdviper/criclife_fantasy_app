import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatchScheduleComponent } from './match-schedule.component';

describe('MatchScheduleComponent', () => {
  let component: MatchScheduleComponent;
  let fixture: ComponentFixture<MatchScheduleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
