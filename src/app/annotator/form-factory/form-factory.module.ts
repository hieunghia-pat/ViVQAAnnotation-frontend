/* ====================================
*           ANGULAR IMPORTS
======================================= */
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* ====================================
*            PRIMENG IMPORTS
======================================= */
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';

/* ====================================
*             CUSTOM IMPORTS
======================================= */
// import { CheckboxComponent } from './components/form-fields/checkbox/checkbox.component';
import { FieldTypeModel } from './core/models/field-type';
import { FormFactoryCoreComponent } from './components/form-factory-core/form-factory-core.component';
import { FormFactoryComponent } from './components/form-factory/form-factory.component';
// import { DropdownComponent } from './components/form-fields/dropdown/dropdown.component';
import { FieldErrorsComponent } from './components/form-fields/field-errors/field-errors.component';
import { InputComponent } from './components/form-fields/input/input.component';
// import { TextareaComponent } from './components/form-fields/textarea/textarea.component';

@NgModule({
  declarations: [
    FormFactoryCoreComponent,
    FormFactoryComponent,
    InputComponent,
    FieldErrorsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    // InputTextareaModule,
    // DropdownModule,
    // CheckboxModule,
  ],
  exports: [FormFactoryCoreComponent, FormFactoryComponent],
})
export class FormFactoryModule {
  static forRoot(config: {
    fields: FieldTypeModel[];
  }): ModuleWithProviders<FormFactoryModule> {
    return {
      ngModule: FormFactoryModule,
      providers: [{ provide: 'config', useValue: config }],
    };
  }
}
