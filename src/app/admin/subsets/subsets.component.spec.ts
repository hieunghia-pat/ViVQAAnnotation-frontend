import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetsComponent } from './subsets.component';

describe('SubsetsComponent', () => {
  let component: SubsetsComponent;
  let fixture: ComponentFixture<SubsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsetsComponent]
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(SubsetsComponent);
      fixture = TestBed.createComponent(SubsetsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
