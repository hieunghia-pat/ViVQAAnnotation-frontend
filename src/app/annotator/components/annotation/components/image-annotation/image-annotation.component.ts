import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AnnotationInterface } from 'src/app/interfaces/annotation.interface';
import { SubsetInterface } from 'src/app/interfaces/subset.interface';
import { AnnotationService } from 'src/app/services/annotation.service';

@Component({
  selector: 'app-image-annotation',
  templateUrl: './image-annotation.component.html',
  styleUrls: ['./image-annotation.component.css']
})
export class ImageAnnotationComponent implements OnChanges {

  @Input() subset!: SubsetInterface

  public annotation!: AnnotationInterface
  public currentIndex: number = 0;

  constructor(
    private annotationService: AnnotationService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.fetchAnnotation(this.subset.imageIds[this.currentIndex])   
    this.annotation =
      {
        id: "0",
        imageId: 400,
        userId: "nhn",
        question: "người phụ nữ đang đi du lịch đến đâu?",
        answer: "Hội An",
        questionType: 0,
        answerType: 1,
        textQA: true,
        stateQA: true,
        actionQA: true
      }
  }

  public fetchAnnotation(imageId: number): void {
    this.annotationService.getAnnotationByImage(imageId).subscribe({
      next: (response: any) => {
        if (response.status == 200) {
          this.annotation = response.body
        }
        else {
          console.log(response.error)
        }
      }
    })
  }

  public nextImage(): void {
    this.currentIndex = this.currentIndex % this.subset.imageIds.length
    this.fetchAnnotation(this.subset.imageIds[this.currentIndex])
  }

  public previousImage(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0)
      this.currentIndex = 0
    this.fetchAnnotation(this.subset.imageIds[this.currentIndex])
  }
}
