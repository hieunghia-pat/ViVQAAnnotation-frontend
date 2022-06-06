import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsetsComponent } from './subsets.component';
import { SubsetItemComponent } from './components/subset-item/subset-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SubsetContainerComponent } from './components/subset-container/subset-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SubsetsComponent,
    SubsetItemComponent,
    SubsetContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class SubsetsModule { }
