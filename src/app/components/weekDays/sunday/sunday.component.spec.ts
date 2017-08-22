/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SundayComponent } from './sunday.component';

describe('SundayComponent', () => {
  let component: SundayComponent;
  let fixture: ComponentFixture<SundayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
