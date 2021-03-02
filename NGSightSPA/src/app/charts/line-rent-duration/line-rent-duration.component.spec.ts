/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LineRentDurationComponent } from './line-rent-duration.component';

describe('LineRentDurationComponent', () => {
  let component: LineRentDurationComponent;
  let fixture: ComponentFixture<LineRentDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineRentDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineRentDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
