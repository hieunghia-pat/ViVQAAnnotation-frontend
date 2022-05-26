<<<<<<< HEAD
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AnnotatorsComponent } from './annotators.component';

// describe('AnnotatorsComponent', () => {
//   let component: AnnotatorsComponent;
//   let fixture: ComponentFixture<AnnotatorsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AnnotatorsComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AnnotatorsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorListComponent } from './annotators.component';

describe('AnnotatorListComponent', () => {
  let component: AnnotatorListComponent;
  let fixture: ComponentFixture<AnnotatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorListComponent ]
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsFromComponent } from './annotators-from.component';

describe('AnnotatorsFromComponent', () => {
  let component: AnnotatorsFromComponent;
  let fixture: ComponentFixture<AnnotatorsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorsFromComponent ]
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(AnnotatorListComponent);
=======
    fixture = TestBed.createComponent(AnnotatorsFromComponent);
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
