import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorStatisticsComponent } from './annotator-statistics.component';

describe('AnnotatorStatisticsComponent', () => {
  let component: AnnotatorStatisticsComponent;
  let fixture: ComponentFixture<AnnotatorStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotatorStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
