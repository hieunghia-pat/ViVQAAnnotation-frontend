import { Component, Input, OnInit } from '@angular/core';
import { AnnotationInterface } from 'src/app/interfaces/annotation.interface';
import { QuestionType } from 'src/app/interfaces/question-type.interface';
import { AnswerType } from 'src/app/interfaces/answer-type.interface';
import { AnnotationService } from 'src/app/services/annotation.service';

@Component({
  selector: 'app-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.css']
})
export class AnnotationsComponent implements OnInit {

  @Input() annotation!: AnnotationInterface

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
    private annotationService: AnnotationService
  ) { }

  ngOnInit(): void {
  }

}
