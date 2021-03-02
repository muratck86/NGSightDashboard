import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterManagementComponent } from './scooter-management.component';

describe('ScooterManagementComponent', () => {
  let component: ScooterManagementComponent;
  let fixture: ComponentFixture<ScooterManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
