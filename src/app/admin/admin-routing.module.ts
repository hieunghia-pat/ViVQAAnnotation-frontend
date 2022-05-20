import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from '../login/login.component';
import { ForbiddenComponent } from '../forbidden/forbidden.component';
import { AuthGuard } from '../_auth/auth.guard';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
    { path: 'login', component: LoginComponent },
    { path: 'forbidden', component: ForbiddenComponent },
    {
        path: '',
        component: FeaturesComponent,
        children: [
            { path: 'annotators', loadChildren: () => import('./features/annotators/annotators.module').then(m => m.AnnotatorsModule) },
            { path: 'subsets', loadChildren: () => import('./features/subsets/subsets.module').then(m => m.SubsetsModule) },
            { path: 'statistics', loadChildren: () => import('./features/statistics/statistics.module').then(m => m.StatisticsModule) }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }