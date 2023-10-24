import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { HrmsComponent } from './hrms.component';




describe('HrmsComponent', () => {
  let component: HrmsComponent;
  let fixture: ComponentFixture<HrmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



