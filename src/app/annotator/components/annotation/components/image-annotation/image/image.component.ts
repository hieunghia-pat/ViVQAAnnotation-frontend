import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image!: any;

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

}
