import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsModalComponent } from './annotators-modal.component';

describe('AnnotatorsModalComponent', () => {
  let component: AnnotatorsModalComponent;
  let fixture: ComponentFixture<AnnotatorsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
