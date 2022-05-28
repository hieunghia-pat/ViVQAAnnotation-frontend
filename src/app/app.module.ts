import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginService } from './services/login.service';
import { MenuListItemComponent } from './admin/ui/menu-list-item/menu-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
// import { MatProgressSpinnerModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AnnotatorComponent } from './annotator/annotator.component'
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LogoutComponent } from './logout/logout.component';
// import { SubsetItemComponent } from './admin/subsets/subset-item/subset-item.component';
// import { SubsetsComponent } from './admin/subsets/subsets.component';
import { AnnotatorListComponent } from './admin/annotators/annotators.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoadingSpinner } from '@shared/components';
import { Navbar } from '@shared/components';
import { AnnotatorsTable, AnnotatorsModal, AnnotatorsForm } from './admin/annotators/components';

@NgModule({
  declarations: [
    AnnotatorListComponent,
    AppComponent,
    AdminComponent,
    LoginComponent,
    AnnotatorComponent,
    ForbiddenComponent,
    LogoutComponent,
    AnnotatorsTable,
    AnnotatorsForm,
    AnnotatorsModal,
    MenuListItemComponent,
    LoadingSpinner,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }