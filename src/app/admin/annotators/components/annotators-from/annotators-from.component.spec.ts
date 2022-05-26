import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsFromComponent } from './annotators-from.component';

describe('AnnotatorsFromComponent', () => {
  let component: AnnotatorsFromComponent;
  let fixture: ComponentFixture<AnnotatorsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorsFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
