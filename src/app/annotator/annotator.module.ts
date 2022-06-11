import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AnnotationComponent } from './components/annotation/annotation.component';
import { AccountComponent } from './components/account/account.component';
import { GuidelineComponent } from './components/guideline/guideline.component';
import { SubsetListComponent } from './components/annotation/components/subset-list/subset-list.component';
import { ImageAnnotationComponent } from './components/annotation/components/image-annotation/image-annotation.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnnotatorComponent } from './annotator.component';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './components/annotation/components/image-annotation/image/image.component';
import { AnnotationsComponent } from './components/annotation/components/image-annotation/annotations/annotations.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './components/account/information/information.component';
import { UpdateComponent } from './components/account/information/update/update.component';
import { MatCardModule } from '@angular/material/card';
import { DialogContentExampleDialog } from './components/guideline/guideline.component';
import {MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        MenuItemComponent,
        AnnotationComponent,
        AccountComponent,
        GuidelineComponent,
        SubsetListComponent,
        ImageAnnotationComponent,
        AnnotatorComponent,
        ImageComponent,
        AnnotationsComponent,
        InformationComponent,
        UpdateComponent,
        DialogContentExampleDialog
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MatIconModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatCardModule,
        MatDialogModule
    ]
})
export class AnnotatorModule { }