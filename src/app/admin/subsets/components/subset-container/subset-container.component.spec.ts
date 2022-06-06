import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetContainerComponent } from './subset-container.component';

describe('SubsetContainerComponent', () => {
  let component: SubsetContainerComponent;
  let fixture: ComponentFixture<SubsetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
