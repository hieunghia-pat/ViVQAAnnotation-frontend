import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AnnotationInterface } from 'src/app/interfaces/annotation.interface';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AnswerType } from 'src/app/interfaces/answer-type.interface';
import { QuestionType } from 'src/app/interfaces/question-type.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';

@Component({
  selector: 'app-annotation-item',
  templateUrl: './annotation-item.component.html',
  styleUrls: ['./annotation-item.component.css']
})
export class AnnotationItemComponent implements OnInit {

  @Input() annotationInterface!: AnnotationInterface
  
  public annotatorInterface!: AnnotatorInterface
  public fetchingAnnotator: boolean = false

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
    private annotatorService: AnnotatorService
  ) { }

  private toggleFetchingAnnotator(): void {
    this.fetchingAnnotator = !this.fetchingAnnotator
  }

  ngOnInit(): void {
    this.toggleFetchingAnnotator()
    this.annotatorService.getAnnotatorById(this.annotationInterface.userId).subscribe({
      next: (response: any) => {
        this.toggleFetchingAnnotator()
        this.annotatorInterface = response.body
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingAnnotator()
        console.log(error)
      }
    })
  }

}
