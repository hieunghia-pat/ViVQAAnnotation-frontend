import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetsComponent } from './subsets.component';

describe('SubsetsComponent', () => {
  let component: SubsetsComponent;
  let fixture: ComponentFixture<SubsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetsComponent ]
import { AnnotatorComponent } from './annotator.component';

describe('AnnotatorComponent', () => {
  let component: AnnotatorComponent;
  let fixture: ComponentFixture<AnnotatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(AnnotatorComponent);
=======
<<<<<<< HEAD:src/app/admin/features/subsets/subsets.component.spec.ts
    fixture = TestBed.createComponent(SubsetsComponent);
=======
    fixture = TestBed.createComponent(AnnotatorComponent);
>>>>>>> 649a42920c9e7714b3a56dd8360fe1d497d1a71a:src/app/annotator/annotator.component.spec.ts
>>>>>>> 649a42920c9e7714b3a56dd8360fe1d497d1a71a
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
