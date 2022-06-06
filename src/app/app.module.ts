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
import { ImageSliderComponent } from './annotator/image-slider/image-slider.component';
// import { InputComponent } from './annotator/form-factory/components/form-fields/input/input.component';
import { FormFactoryComponent } from './annotator/form-factory/components/form-factory/form-factory.component';
// import { FormFactoryCoreComponent } from './annotator/form-factory/components/form-factory-core/form-factory-core.component';
//import { ColorPickerModule } from 'ngx-color-picker';
import { FormExampleComponent } from './annotator/form-example/form-example.component';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
//import { FabricjsEditorComponent } from './annotator/customtool-bar/angular-editor-fabric-js/src/public-api';
import { FormFactoryModule } from './annotator/form-factory/form-factory.module';
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
    Navbar,
    ImageSliderComponent,
    // InputComponent,
    // FormFactoryComponent,
    // FormFactoryCoreComponent,
    FormExampleComponent
    
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
    SharedModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FormFactoryModule.forRoot({
      fields: [],
    })
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