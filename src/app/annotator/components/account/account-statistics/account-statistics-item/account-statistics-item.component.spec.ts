import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatisticsItemComponent } from './account-statistics-item.component';

describe('AccountStatisticsItemComponent', () => {
  let component: AccountStatisticsItemComponent;
  let fixture: ComponentFixture<AccountStatisticsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountStatisticsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatisticsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
