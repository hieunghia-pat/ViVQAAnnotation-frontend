import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsTableComponent } from './annotators-table.component';

describe('AnnotatorsTableComponent', () => {
  let component: AnnotatorsTableComponent;
  let fixture: ComponentFixture<AnnotatorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
