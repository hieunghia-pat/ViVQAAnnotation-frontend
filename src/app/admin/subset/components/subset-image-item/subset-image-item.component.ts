import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ImageInterface } from 'src/app/interfaces/image.interface';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-subset-image-item',
  templateUrl: './subset-image-item.component.html',
  styleUrls: ['./subset-image-item.component.css']
})
export class SubsetImageItemComponent implements OnInit, OnChanges {

  @Input() imageInterface!: ImageInterface;

  public image: any;

  constructor(
    private imageService: ImageService,
    private domSanitizer: DomSanitizer,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.imageService.getImage(this.imageInterface.id).subscribe({
      next: (response: any) => {
        this.image = this.imageService.stringToImage(response.image)
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public onOpenImage(): void {
    this.route.navigate([`admin/subsets/subset/image`],
    {
      queryParams: {
        id: this.imageInterface.id
      }
    })
  }

}
