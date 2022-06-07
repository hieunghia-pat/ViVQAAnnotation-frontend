import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnChanges {

  @Input() imageId!: number;

  public image!: any;

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.imageService.getImage(this.imageId).subscribe({
        next: (response: any) => {
          if (response.status == 200) {
            this.image = this.imageService.stringToImage(response.body.image)
          }
          else {
            console.log(response.error)
          }
        }
      })
  }

}
