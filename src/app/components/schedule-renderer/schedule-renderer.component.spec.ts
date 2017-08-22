import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRendererComponent } from './schedule-renderer.component';

describe('ScheduleRendererComponent', () => {
  let component: ScheduleRendererComponent;
  let fixture: ComponentFixture<ScheduleRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
