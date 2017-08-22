/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaturdayComponent } from './saturday.component';

describe('SaturdayComponent', () => {
  let component: SaturdayComponent;
  let fixture: ComponentFixture<SaturdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaturdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
