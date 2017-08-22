/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TuesdayComponent } from './tuesday.component';

describe('ThursdayComponent', () => {
  let component: TuesdayComponent;
  let fixture: ComponentFixture<TuesdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuesdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuesdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
