import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {

  private imageId!: number;
  public image: any

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params: any) => {
        this.imageId = params.id
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
      }
    })
  }

}
