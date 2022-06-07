import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnotatorComponent } from './annotator.component';
import {SubsetsComponent} from '../admin/subsets/subsets.component'
describe('SubsetsComponent', () => {
  let component: SubsetsComponent;
  let fixture: ComponentFixture<SubsetsComponent>;});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetsComponent ]})
  });

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
    fixture = TestBed.createComponent(AnnotatorComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
