import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnotatorsComponent } from './annotators.component';


const routes: Routes = [
  {
    path: '',
    component: AnnotatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnotatorsRoutingModule { }