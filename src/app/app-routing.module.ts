import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnotatorComponent } from './annotator/annotator.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { AnnotatorsComponent } from './admin/annotators/annotators.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';

const routes: Routes = [
  // { path: "", redirectTo: "login", pathMatch: "full" },
  // { path: "login", component: LoginComponent, data: { title: "Login" } },
  // { path: "logout", component: LogoutComponent, data: { title: "Logout" } },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'annotators', component: AnnotatorsComponent, data: { title: "Annotators" } },
      // { path: 'subsets', component: SubsetsComponent, data: { title: "Subsets" } },
      { path: 'statistics', component: StatisticsComponent, data: { title: "Statistics" } }
    ],
    data: { title: "Admin", role: "ROLE_ADMIN" },
    // canActivate: [AuthGuard]
  },
  // { path: 'annotator', component: AnnotatorComponent, data: { title: "Annotator", role: "ROLE_ANNOTATOR" }, canActivate: [AuthGuard] },
  // { path: "forbidden", component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
