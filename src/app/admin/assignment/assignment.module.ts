import { NgModule } from '@angular/core';
import { AssignmentComponent } from './assignment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AnnotatorsAssignmentComponent } from './annotators-assignment/annotators-assignment.component';
import { SubsetsAssignmentComponent } from './subsets-assignment/subsets-assignment.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    MatListModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class AssignmentModule { }