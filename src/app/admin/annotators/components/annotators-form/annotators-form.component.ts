import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NIL, v4 as uuidv4 } from 'uuid'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annotators-form',
  templateUrl: './annotators-form.component.html',
  styleUrls: ['./annotators-form.component.css']
})
export class AnnotatorsFormComponent implements OnInit, OnChanges {

  @Input() annotator!: AnnotatorInterface | null;
  @Input() title!: string;
  @Input() buttonValue!: string;
  @Output() formOpenned: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() updatedStatus: EventEmitter<boolean> = new EventEmitter<boolean>()

  public updatingAnnotator: boolean = false;

  public annotationForm: FormGroup = this.formBuilder.group({
    username: [""],
    firstname: [""],
    lastname: [""]
  })

  constructor(
    private annotatorService: AnnotatorService,
    private snackBarService: SnackBarService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.annotationForm = this.formBuilder.group({
      username: [(this.annotator != null) ? this.annotator?.username : ""],
      firstname: [(this.annotator != null) ? this.annotator?.firstname : ""],
      lastname: [(this.annotator != null) ? this.annotator?.lastname : ""]
    })
  }

  private toggleUpdatingAnnotator(): void {
    this.updatingAnnotator = !this.updatingAnnotator
    this.formOpenned.emit(this.updatingAnnotator)
  }

  public onCloseForm(): void {
    this.formOpenned.emit(false)
  }

  public onSubmitForm(): void {
    let updatedAnnotator: AnnotatorInterface
    if (this.annotator == null) {
       updatedAnnotator= {
        id: NIL,
        username: this.annotationForm.value.username,
        firstname: this.annotationForm.value.firstname,
        lastname: this.annotationForm.value.lastname,
        password: uuidv4(),
        role: "ROLE_ANNOTATOR"
      }
      this.addAnnotator(updatedAnnotator)
    }
    else {
      updatedAnnotator = {
        id: this.annotator.id,
        username: this.annotationForm.value.username,
        firstname: this.annotationForm.value.firstname,
        lastname: this.annotationForm.value.lastname,
        role: this.annotator.role
      }
      this.editAnnotator(updatedAnnotator)
    }
  }

  public addAnnotator(annotator: AnnotatorInterface): void {
    this.toggleUpdatingAnnotator()
    this.annotatorService.addAnnotator(annotator).subscribe({
      next: (response: any) => {
        this.toggleUpdatingAnnotator()
        this.updatedStatus.emit(true)
      },
      error: (error: HttpErrorResponse) => {
        this.toggleUpdatingAnnotator()
        if (error.status == 200) {
          this.updatedStatus.emit(true)
        }
        else {
          this.snackBarService.openSnackBar(error.message)
        }
      }
    })
  }

  public editAnnotator(annotator: AnnotatorInterface): void {
    this.toggleUpdatingAnnotator()
    this.annotatorService.updateAnnotator(annotator).subscribe({
      next: (response: any) => {
        this.toggleUpdatingAnnotator()
        this.updatedStatus.emit(true)
      },
      error: (error: HttpErrorResponse) => {
        this.toggleUpdatingAnnotator()
        if (error.status == 200) {
          this.updatedStatus.emit(true)
        }
        else {
          this.snackBarService.openSnackBar(error.message)
        }
      }
    })
  }

}