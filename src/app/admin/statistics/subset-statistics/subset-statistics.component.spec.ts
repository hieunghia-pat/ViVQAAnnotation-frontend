import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetStatisticsComponent } from './subset-statistics.component';

describe('SubsetStatisticsComponent', () => {
  let component: SubsetStatisticsComponent;
  let fixture: ComponentFixture<SubsetStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsetStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
