/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FridayComponent } from './friday.component';

describe('FridayComponent', () => {
  let component: FridayComponent;
  let fixture: ComponentFixture<FridayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
