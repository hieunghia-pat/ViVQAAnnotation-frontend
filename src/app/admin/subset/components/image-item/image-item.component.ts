import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnotationInterface } from 'src/app/interfaces/annotation.interface';
import { AnnotationService } from 'src/app/services/annotation.service';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {

  private imageId!: number;

  public image: any
  public annotationInterfaces!: AnnotationInterface[]
  public fetchingData: boolean = false

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private annotationService: AnnotationService
  ) { }

  private toggleFetchingData(): void {
    this.fetchingData = !this.fetchingData
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params: any) => {
        this.imageId = params.id
        this.toggleFetchingData()
        // fetching image
        this.imageService.getImage(this.imageId).subscribe({
          next: (response: any) => {
            if (response.status != 200) {
              console.error(response.error)
            }
            else {
              this.image = response.body.url
              // then fetching annotation
              this.annotationService.getAnnotationByImage(this.imageId).subscribe({
                next: (response: any) => {
                  this.toggleFetchingData()
                  if (response.error) {
                    console.log(response.error)
                  }
                  else {
                    this.annotationInterfaces = response.body
                  }
                },
                error: (error: HttpErrorResponse) => {
                  this.toggleFetchingData()
                  console.error(error)
                }
              })
            }
          },
          error: (error: HttpErrorResponse) => {
            this.toggleFetchingData()
            console.error(error)
          }
        })
      }
    })
  }

}
