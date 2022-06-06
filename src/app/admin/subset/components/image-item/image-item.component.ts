import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnotationInterface } from 'src/app/interfaces/annotation.interface';
import { AnnotationService } from 'src/app/services/annotation.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {

  private imageId!: number;
  public image: any
  public annotationInterfaces: AnnotationInterface[] = [
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
    },
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
    },
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
  ]

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private annotationService: AnnotationService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params: any) => {
        this.imageId = params.id
        // fetching image
        this.imageService.getImage(this.imageId).subscribe({
          next: (response: any) => {
            if (response.error) {
              console.log(response.error)
            }
            else {
              this.image = this.imageService.stringToImage(response.image)
            }
          }
        })
        // // fetching annotation
        // this.annotationService.getAnnotationByImage(this.imageId).subscribe({
        //   next: (response: any) => {
        //     if (response.error) {
        //       console.log(response.error)
        //     }
        //     else {
        //       this.annotationInterfaces = response
        //     }
        //   }
        // })
      }
    })
  }

}
