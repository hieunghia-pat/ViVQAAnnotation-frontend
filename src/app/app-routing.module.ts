import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnotatorComponent } from './annotator/annotator.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { AnnotatorListComponent } from './admin/annotators/annotators.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { SubsetsComponent } from './admin/subsets/subsets.component';
import { SubsetComponent } from './admin/subset/subset.component';
import { AssignmentComponent } from './admin/assignment/assignment.component';
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "logout", component: LogoutComponent, data: { title: "Logout" } },
  {
    path: 'admin', component: AdminComponent, data: { title: "Admin", role: "ROLE_ADMIN" },
    children: [
      { path: 'annotators', component: AnnotatorListComponent, data: { title: 'Annotators Manager' } },
      { path: "subsets", component: SubsetsComponent, data: { title: "Subsets Manager" } },
      { path: "subsets/get", component: SubsetComponent, data: { title: "Subset Manager" } },
      { path: 'statistics', component: StatisticsComponent, data: { title: 'Statistics' } },
      { path: "assignment", component: AssignmentComponent, data: { title: "Assignment" } },
    ]
  },
  { path: 'annotator', component: AnnotatorComponent, data: { title: "Annotator", role: "ROLE_ANNOTATOR" }, canActivate: [AuthGuard] },
  { path: "forbidden", component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
