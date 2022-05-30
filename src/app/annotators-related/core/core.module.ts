import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COOKIE SERVICE
// import { CookieService } from 'ngx-cookie-service';
// SNACKBAR MODULE FOR NOTIFICATIONS
import { MatSnackBarModule } from '@angular/material/snack-bar';
// LOADING SPINNER
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// HTTP INTERCEPTOR
// import { httpInterceptorProviders } from './interceptors';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    OverlayModule,
    MatProgressSpinnerModule,
  ],
  // providers: [CookieService, httpInterceptorProviders],
})
export class CoreModule {}
