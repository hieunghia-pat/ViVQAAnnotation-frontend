import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { SubsetListComponent } from './subset-list/subset-list.component';
import { SubsetStatisticsComponent } from './subset-statistics/subset-statistics.component';
import { AnnotatorListComponent } from './annotator-list/annotator-list.component';
import { AnnotatorStatisticsComponent } from './annotator-statistics/annotator-statistics.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { StatisticsItemComponent } from './annotator-statistics/statistics-item/statistics-item.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    StatisticsComponent,
    SubsetListComponent,
    SubsetStatisticsComponent,
    AnnotatorListComponent,
    AnnotatorStatisticsComponent,
    StatisticsItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule
  ]
})
export class StatisticsModule { }
