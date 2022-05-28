import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnnotatorListComponent } from './admin/annotators/annotators.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { SubsetsComponent } from './admin/subsets/subsets.component';
import { AnnotatorComponent } from './annotator/annotator.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "logout", component: LogoutComponent, data: { title: "Logout" } },
  { path: 'admin', component: AdminComponent, data: { title: "Admin", role: "ROLE_ADMIN" } ,
//   children: [
//     { path: 'annotators', loadChildren: () => import('./admin/annotators/annotators.module').then(m => m.AnnotatorsModule) },
//     { path: 'subsets', loadChildren: () => import('./admin/subsets/subsets.module').then(m => m.SubsetsModule) },
//     { path: 'statistics', loadChildren: () => import('./admin/statistics/statistics.module').then(m => m.StatisticsModule) }
// ]
      children : [
        {path : 'annotators',component : AnnotatorListComponent, data : {title : 'Annotators'}},
        {path : 'subsets',component : SubsetsComponent, data : {title : 'Subsets'}},
        {path : 'statistics',component : StatisticsComponent, data : {title : 'Statistics'}}
      ]
}
  // { path: 'annotator', component: AnnotatorComponent, data: { title: "Annotator", role: "ROLE_ANNOTATOR" }, canActivate: [AuthGuard] },
  // { path: "forbidden", component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
