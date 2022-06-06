import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { AnnotationItemComponent } from "./components/annotation-item/annotation-item.component";
import { ImageItemComponent } from "./components/image-item/image-item.component";
import { SubsetImageItemComponent } from "./components/subset-image-item/subset-image-item.component";
import { SubsetComponent } from "./subset.component";

@NgModule({
    declarations: [
        ImageItemComponent,
        AnnotationItemComponent,
        SubsetImageItemComponent,
        SubsetComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatCheckboxModule,
        MatSelectModule
    ]
})
export class SubsetModule { }