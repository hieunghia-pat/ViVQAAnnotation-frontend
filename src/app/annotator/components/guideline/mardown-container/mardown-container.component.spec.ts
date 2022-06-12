import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MardownContainerComponent } from './mardown-container.component';

describe('MardownContainerComponent', () => {
  let component: MardownContainerComponent;
  let fixture: ComponentFixture<MardownContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MardownContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MardownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
