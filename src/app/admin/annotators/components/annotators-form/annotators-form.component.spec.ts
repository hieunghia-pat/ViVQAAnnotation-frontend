import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsFormComponent } from './annotators-form.component';

describe('AnnotatorsFormComponent', () => {
  let component: AnnotatorsFormComponent;
  let fixture: ComponentFixture<AnnotatorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
