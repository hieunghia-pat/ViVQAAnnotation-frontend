import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormFactoryService } from '../form-factory/core/services/form-factory.service';
import { FormFactoryModel } from '../form-factory/core/models/form-factory';
import { fieldsFromApi } from './fields-from-api';
import { AnnotatorComponent } from '../annotator.component';

@Component({
  selector: 'app-form-example',
  template: `

    <!-- EXAMPLE 1: -->
    <!-- <app-form-factory
      [form]="exampleForm"
      [fields]="exampleFields"
    ></app-form-factory> -->

    <!-- EXAMPLE 2: -->
    
        
<app-form-factory
  [form]="formFactory.getFormGroup(exampleForm, 'dynamic')"
  [fields]="exampleFields"
></app-form-factory>
<section>
  <p-button
    styleClass="mb-3"
    label="Submit"
    (click)="onSubmit(); nextimg();"
  ></p-button>
  <!-- <p-button
    styleClass="mb-3 ml-2 p-button-secondary"
    label="Reset"
    (click)="onReset()"
  ></p-button> -->
</section>
     

   
    <!-- <pre>{{ formOutput | json }}</pre> -->
  `,
})
export class FormExampleComponent implements OnInit {
  exampleForm!: FormGroup;
  formOutput: any;
  exampleFields!: any ;

  constructor(
    private anno : AnnotatorComponent,
    private apifield : fieldsFromApi,
    private fb: FormBuilder,
    public formFactory: FormFactoryService
  ) {}

  ngOnInit(): void {
    let curr_img : number = this.anno.getImageid()
    this.exampleFields =  this.apifield.getFormlabel(curr_img);
   
    this.exampleForm = this.fb.group({
      dynamic: this.formFactory.createForm(this.exampleFields),
      id: ['1', Validators.required],
    });

    this.formOutput = this.exampleForm.getRawValue();
  }

  onSubmit() {
    this.formOutput = this.exampleForm.getRawValue();
    this.apifield.submitlabel(this.formOutput);
  }
  nextimg(){
    this.anno.NextImage()
  }
  // onReset() {
  //   this.exampleForm.reset();
  //   this.formOutput = this.exampleForm.getRawValue();
  // }
}
