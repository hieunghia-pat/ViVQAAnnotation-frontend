import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input() information!: AnnotatorInterface

  public showPassword: boolean = false
  public updatingInformation: boolean = false
  public isEditing: boolean = false

  constructor(
    private annotatorService: AnnotatorService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  private toggleUpdatingInformation(): void {
    this.updatingInformation = !this.updatingInformation
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }

  public toggleIsEditing(): void {
    this.isEditing = !this.isEditing
  }

  public updateInformation(): void {
    this.toggleUpdatingInformation()
    this.annotatorService.updateAnnotator(this.information).subscribe({
      next: (response: any) => {
        this.toggleUpdatingInformation()
        this.closeForm()
      },
      error: (error: HttpErrorResponse) => {
        this.toggleUpdatingInformation()
        this.snackBarService.openSnackBar(`Status ${error.status}. Status text: ${error.statusText}. Error: ${error.message}`)
      }
    })
  }

  public closeForm(): void {
    this.isEditing = false
  }
}
