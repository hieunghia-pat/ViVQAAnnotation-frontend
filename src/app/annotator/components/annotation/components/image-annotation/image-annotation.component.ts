import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnnotationInterface } from 'src/app/interfaces/annotation.interface';
import { ImageInterface } from 'src/app/interfaces/image.interface';
import { SubsetInterface } from 'src/app/interfaces/subset.interface';
import { AnnotationService } from 'src/app/services/annotation.service';
import { ImageService } from 'src/app/services/image.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-image-annotation',
  templateUrl: './image-annotation.component.html',
  styleUrls: ['./image-annotation.component.css']
})
export class ImageAnnotationComponent implements OnChanges {

  @Input() subset!: SubsetInterface

  public image!: string;
  public imageInterface!: ImageInterface
  public annotation: AnnotationInterface = {
    "actionQA": false,
    "answer": "",
    "answerType": 2,
    "id": "00000000-0000-0000-0000-000000000000",
    "imageId": 702,
    "question": "",
    "questionType": 0,
    "stateQA": false,
    "textQA": false,
    "userId": "f545d643-a048-47dd-8b88-48094b54e5c5"
  }
  public currentIndex: number = 0;
  public fetchingData: boolean = false

  constructor(
    private imageService: ImageService,
    private annotationService: AnnotationService,
    private userAuthService: UserAuthService,
    private snackBarService: SnackBarService
  ) { }

  public toggleFetchingData(): void {
    this.fetchingData = !this.fetchingData
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentIndex = 0
    let imageId: number = this.subset.imageIds[this.currentIndex]
    this.toggleFetchingData()
    this.imageService.getImage(imageId).subscribe({ // first fetching the image
      next: (response: any) => {
        if (response.status == 200) {
          this.image = response.body.url
          this.imageInterface = response.body
          let username: string = this.userAuthService.getUsername()!
          this.annotationService.getAnnotationByUserForImage(username, imageId).subscribe({ // then fetching the annotation of the user for this image
            next: (response: any) => {
              this.toggleFetchingData()
              if (response.status == 200) {
                this.annotation = response.body
              }
              else {
                this.snackBarService.openSnackBar(`Error while fetching annotation of user ${username} for image ${imageId}`)
              }
            },
            error: (error: HttpErrorResponse) => {
              this.toggleFetchingData()
              this.snackBarService.openSnackBar(`Status ${error.error}. Error: ${error.message}`)
            }
          })
        }
        else {
          this.snackBarService.openSnackBar(`Error while fetching image ${imageId}`)
        }
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(`Status ${error.error}. Error: ${error.message}`)
      }
    })
  }

  private fetchData(): void {
    let imageId: number = this.subset.imageIds[this.currentIndex]
    this.toggleFetchingData()
    this.imageService.getImage(imageId).subscribe({ // first fetching the image
      next: (response: any) => {
        if (response.status == 200) {
          this.image = response.body.url
          this.imageInterface = response.body
          let username: string = this.userAuthService.getUsername()!
          this.annotationService.getAnnotationByUserForImage(username, imageId).subscribe({ // then fetching the annotation of the user for this image
            next: (response: any) => {
              this.toggleFetchingData()
              if (response.status == 200) {
                this.annotation = response.body
              }
              else {
                this.snackBarService.openSnackBar(`Error while fetching annotation of user ${username} for image ${imageId}`)
              }
            },
            error: (error: HttpErrorResponse) => {
              this.toggleFetchingData()
              this.snackBarService.openSnackBar(`Status ${error.error}. Error: ${error.message}`)
            }
          })
        }
        else {
          this.snackBarService.openSnackBar(`Error while fetching image ${imageId}`)
        }
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(`Status ${error.error}. Error: ${error.message}`)
      }
    })
  }

  public navigateImage(direction: number): void {
    this.currentIndex += direction
    if (this.currentIndex < 0)
      this.currentIndex = 0
    if (this.currentIndex >= this.subset.imageIds.length)
      this.currentIndex = this.subset.imageIds.length - 1

    this.fetchData()
  }
}
