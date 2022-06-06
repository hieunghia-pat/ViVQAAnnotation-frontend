import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageInterface } from 'src/app/interfaces/image.interface';
import { ImageService } from 'src/app/services/image.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-subset',
  templateUrl: './subset.component.html',
  styleUrls: ['./subset.component.css']
})
export class SubsetComponent implements OnInit {

  private subsetId!: number

  public imageInterfaces!: ImageInterface[]
  public fetchingImage: boolean = false;

  constructor(
    private imageService: ImageService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute
  ) { }

  private toggleFetchingImage(): void {
    this.fetchingImage = !this.fetchingImage
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params: any) => {
        this.subsetId = params.id
        this.toggleFetchingImage()
        this.imageService.getImageInterfacesBySubset(this.subsetId).subscribe({
          next: (response: any) => {
            this.toggleFetchingImage()
            this.imageInterfaces = response
          }
        })
      }
    })
  }

}
