import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { AnnotatorsComponent } from './annotators.component';
import { AnnotatorsFormComponent } from './components/annotators-form/annotators-form.component';
import { AnnotatorsListComponent } from './components/annotators-list/annotators-list.component';

@NgModule({
  declarations: [
    AnnotatorsFormComponent,
    AnnotatorsListComponent,
    AnnotatorsComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserModule
  ]
})
export class AnnotatorsModule { }
