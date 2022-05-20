
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuListItemComponent } from './features/ui/menu-list-item/menu-list-item.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesComponent } from './features/features.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgStyle} from "@angular/common"
import {NgClass} from "@angular/common"


@NgModule({
  declarations: [
        AdminComponent,
        FeaturesComponent,
        MenuListItemComponent,
  ],
  imports: [
      BrowserModule,
      FlexLayoutModule,
      HttpClientModule,
      AdminRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      RouterModule,
      CommonModule,
      NgStyle,
      NgClass
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }