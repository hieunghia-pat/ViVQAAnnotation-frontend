import { Component, Input, OnInit, Output } from '@angular/core';
import { AnnotationInterface } from 'src/app/interfaces/annotation.interface';
import { QuestionType } from 'src/app/interfaces/question-type.interface';
import { AnswerType } from 'src/app/interfaces/answer-type.interface';
import { EventEmitter } from '@angular/core';
import { NIL } from 'uuid';
import { AnnotationService } from 'src/app/services/annotation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { SubsetInterface } from 'src/app/interfaces/subset.interface';
import { ImageInterface } from 'src/app/interfaces/image.interface';

@Component({
  selector: 'app-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.css']
})
export class AnnotationsComponent implements OnInit {
  @Input() image!: ImageInterface
  @Input() subset!: SubsetInterface
  @Input() annotation!: AnnotationInterface
  @Input() fetchingData!: boolean

  @Output() imageChange: EventEmitter<number> = new EventEmitter<number>()

  private direction: number = 0

  public questionTypes: QuestionType[] = [
    {
      id: 0,
      name: "What"
    },
    {
      id: 1,
      name: "Who"
    },
    {
      id: 2,
      name: "Where"
    },
    {
      id: 3,
      name: "When"
    },
    {
      id: 4,
      name: "How"
    },
    {
      id: 5,
      name: "Other"
    }
  ]

  public answerTypes: AnswerType[] = [
    {
      id: 0,
      name: "Word"
    },
    {
      id: 1,
      name: "Phrase"
    },
    {
      id: 2,
      name: "Sentence"
    }
  ]

  constructor(
    private annotationService: AnnotationService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  private toggleFetchingData(): void {
    this.fetchingData = !this.fetchingData
  }

  public onQuestionChanged(question: any): void {
    this.annotation.question = question
  }

  public onAnswerChanged(answer: any): void {
    this.annotation.answer = answer
  }

  public onQuestionTypeChanged(questionType: any): void {
    this.annotation.questionType = questionType
  }

  public onAnswerTypeChanged(answerType: any): void {
    this.annotation.answerType = answerType
  }

  public onTextQAChanged(textQA: any): void {
    this.annotation.textQA = textQA
  }

  public onStateQAChanged(stateQA: any): void {
    this.annotation.stateQA = stateQA
  }

  public onActionQAChanged(actionQA: any): void {
    this.annotation.actionQA = actionQA
  }

  public addNewAnnotation(): void {
    this.toggleFetchingData()
    this.annotationService.addAnnotation(this.annotation).subscribe({
      next: (response: any) => {
        this.toggleFetchingData()
        if (response.status == 200) {
          this.imageChange.emit(this.direction)
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(`Status ${error.status}. Error message: ${error.message}`)
      }
    })
  }

  public editAnnotation(): void {
    this.toggleFetchingData()
    this.annotationService.updateAnnotation(this.annotation).subscribe({
      next: (response: any) => {
        this.toggleFetchingData()
        if (response.status == 200) {
          this.imageChange.emit(this.direction)
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(`Status ${error.status}. Error message: ${error.message}`)
      }
    })
  }

  public isAnnotated(formValue: any): boolean {
    return (formValue.question != "") && (formValue.answer != "")
  }

  public onNavigatingImage(direction: number): void {
    this.direction = direction
    if (this.isAnnotated(this.annotation)) {
      if (this.annotation.id == NIL)
        this.addNewAnnotation()
      else
        this.editAnnotation()
    }
    else {
      this.imageChange.emit(this.direction)
    }
  }

}
