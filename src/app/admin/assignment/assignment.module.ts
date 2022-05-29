import { NgModule } from '@angular/core';
import { AssignmentComponent } from './assignment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AnnotatorsAssignmentComponent } from './annotators-assignment/annotators-assignment.component';
import { SubsetsAssignmentComponent } from './subsets-assignment/subsets-assignment.component';

@NgModule({
  declarations: [
    AssignmentComponent, 
    AnnotatorsAssignmentComponent, 
    SubsetsAssignmentComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ]
})
export class AssignmentModule { }