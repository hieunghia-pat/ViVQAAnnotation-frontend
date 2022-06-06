import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetItemComponent } from './subset-image-item.component';

describe('SubsetImageItemComponent', () => {
  let component: SubsetImageItemComponent;
  let fixture: ComponentFixture<SubsetImageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetImageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetImageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
