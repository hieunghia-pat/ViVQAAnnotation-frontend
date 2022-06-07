import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-annotators',
  templateUrl: './annotators.component.html',
  styleUrls: ['./annotators.component.css'],
})
export class AnnotatorsComponent implements OnInit {

  public annotators!: AnnotatorInterface[];
  public tmpAnnotator: AnnotatorInterface | null = null;
  
  public processingAnnotator: boolean = false;
  public formOpenned: boolean = false;

  public processType: string = "Add annotator"
  public buttonType: string = "Add"

  constructor(
    private annotatorService: AnnotatorService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.toggleProcessingAnnotator()
    this.annotatorService.getAnnotators().subscribe({
      next: (response: any) => {
        this.toggleProcessingAnnotator()
        if (response.status == 200) {
          this.annotators = response.body
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      }
    })
  }

  public fetchAnnotators() {
    this.annotators = []
    this.toggleProcessingAnnotator()
    this.annotatorService.getAnnotators().subscribe({
      next: (response: any) => {
        this.toggleProcessingAnnotator()
        if (response.status == 200) {
          this.annotators = response.body
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      }
    })
  }

  public closeForm(value: boolean): void {
    this.formOpenned = value
  }

  private toggleProcessingAnnotator(): void {
    this.processingAnnotator = !this.processingAnnotator
  }

  public onAddAnnotator(): void {
    this.formOpenned = true
    this.tmpAnnotator = null
    this.processType = "Add annotator"
    this.buttonType = "Add"
  }

  public onEditAnnotator(index: number): void {
    this.formOpenned = true
    this.tmpAnnotator = this.annotators[index]
    this.processType = "Update annotator"
    this.buttonType = "Update"
  }

  public deleteAnntotator(index: number): void {
    this.toggleProcessingAnnotator()
    let annotator: AnnotatorInterface = this.annotators[index]
    this.annotatorService.deleteAnnotator(annotator.username).subscribe({
      next: (response: any) => {
        this.toggleProcessingAnnotator()
        if (response.status == 200) {
          this.fetchAnnotators()
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      }
    })
  }

}
