import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorListComponent } from './annotator-list.component';

describe('AnnotatorListComponent', () => {
  let component: AnnotatorListComponent;
  let fixture: ComponentFixture<AnnotatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
