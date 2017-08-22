/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WednesdayComponent } from './wednesday.component';

describe('WednesdayComponent', () => {
  let component: WednesdayComponent;
  let fixture: ComponentFixture<WednesdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WednesdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WednesdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
