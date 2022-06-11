import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() information!: AnnotatorInterface

  @Output() updatedInformation: EventEmitter<AnnotatorInterface> = new EventEmitter<AnnotatorInterface>()
  @Output() closedForm: EventEmitter<void> = new EventEmitter<void>()

  public updatingInformation: boolean = false

  public informationForm: FormGroup = new FormGroup({
    username: new FormControl(this.information.username),
    firstname: new FormControl(this.information.firstname),
    lastname: new FormControl(this.information.lastname),
    password: new FormControl(this.information.password)
  })

  constructor(
    private annotatorService: AnnotatorService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  private toggleUpdatingInformation(): void {
    this.updatingInformation = !this.updatingInformation
  }

  public updateInformation(): void {
    this.information.username = this.informationForm.value.username
    this.information.firstname = this.informationForm.value.firstname
    this.information.lastname = this.informationForm.value.lastname
    this.information.password = this.informationForm.value.password

    this.toggleUpdatingInformation()
    this.annotatorService.updateAnnotator(this.information).subscribe({
      next: (response: any) => {
        this.toggleUpdatingInformation()
        if (response.sattus == 200) {
          this.updatedInformation.emit(this.information)
          this.closeForm()
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      },
      error: (error: HttpErrorResponse) => {
        this.toggleUpdatingInformation()
        this.snackBarService.openSnackBar(`Status ${error.status}. Status text: ${error.statusText}. Error: ${error.message}`)
      }
    })
  }

  public closeForm(): void {
    this.closedForm.emit()
  }
}
