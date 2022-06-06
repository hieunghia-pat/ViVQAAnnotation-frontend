import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetsAssignmentComponent } from './subsets-assignment.component';

describe('SubsetsAssignmentComponent', () => {
  let component: SubsetsAssignmentComponent;
  let fixture: ComponentFixture<SubsetsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetsAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
