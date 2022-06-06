import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsAssignmentComponent } from './annotators-assignment.component';

describe('AnnotatorsAssignmentComponent', () => {
  let component: AnnotatorsAssignmentComponent;
  let fixture: ComponentFixture<AnnotatorsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorsAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
