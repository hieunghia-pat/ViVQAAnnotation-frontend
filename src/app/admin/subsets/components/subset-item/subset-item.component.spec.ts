import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetItemComponent } from './subset-item.component';

describe('SubsetItemComponent', () => {
  let component: SubsetItemComponent;
  let fixture: ComponentFixture<SubsetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
