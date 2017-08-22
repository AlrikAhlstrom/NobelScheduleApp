/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThursdayComponent } from './thursday.component';

describe('ThursdayComponent', () => {
  let component: ThursdayComponent;
  let fixture: ComponentFixture<ThursdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThursdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThursdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
