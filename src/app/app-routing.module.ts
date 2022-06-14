import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { AnnotatorsComponent } from './admin/annotators/annotators.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { SubsetsComponent } from './admin/subsets/subsets.component';
import { SubsetComponent } from './admin/subset/subset.component';
import { AssignmentComponent } from './admin/assignment/assignment.component';
import { ImageItemComponent } from './admin/subset/components/image-item/image-item.component';
import { AnnotationComponent } from './annotator/components/annotation/annotation.component';
import { AccountComponent } from './annotator/components/account/account.component';
import { AnnotatorComponent } from './annotator/annotator.component';
import { GuidelineComponent } from './admin/guideline/guideline.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "logout", component: LogoutComponent, data: { title: "Logout" } },
  {
    path: 'admin', component: AdminComponent, data: { title: "Admin", role: "ROLE_ADMIN" },
    children: [
      { path: 'annotators', component: AnnotatorsComponent, data: { title: 'Annotators Management' }, canActivateChild: [AuthGuard] },
      { path: 'guideline', component: GuidelineComponent, data: { title: 'Guideline' }, canActivateChild: [AuthGuard] },
      { path: "subsets", component: SubsetsComponent, data: { title: "Subsets Management" }, canActivateChild: [AuthGuard] },
      { path: "subsets/subset", component: SubsetComponent, data: { title: "Subset" }, canActivateChild: [AuthGuard] },
      { path: "subsets/subset/image", component: ImageItemComponent, data: { title: "Images" }, canActivateChild: [AuthGuard] },
      { path: 'statistics', component: StatisticsComponent, data: { title: 'Statistics' }, canActivateChild: [AuthGuard] },
      { path: "assignment", component: AssignmentComponent, data: { title: "Assignment" }, canActivateChild: [AuthGuard] },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'annotator', component: AnnotatorComponent, data: { title: "Annotator", role: "ROLE_ANNOTATOR" },
    children: [
      { path: "annotation", component: AnnotationComponent, data: { title: "Annotation" }, canActivateChild: [AuthGuard] },
      { path: "account", component: AccountComponent, data: { title: "Account Management" }, canActivateChild: [AuthGuard] }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
