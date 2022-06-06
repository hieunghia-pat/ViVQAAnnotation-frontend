// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-annotator',
//   templateUrl: './annotator.component.html',
//   styleUrls: ['./annotator.component.css']
// })
// export class AnnotatorComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { ImageService } from '../services/image.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({

  selector: 'annotator-root',

  templateUrl: './annotator.component.html',

  styleUrls: ['./annotator.component.css']

})

export class AnnotatorComponent implements OnInit {
  title = 'CodeInfo';

  constructor(private _http: HttpClient, private imageservice : ImageService ) {
  }
  imagesData!: any ;
  current_id! : number;
  binary_image!: any;
  async ngOnInit() {
    this.imagesData = this.imageservice.getListimages();
    this.binary_image = await this.imageservice.getFistImage();
    this.current_id = 0;
    // console.log(this.binary_image)
  }

  NextImage() {

    this.binary_image = this.imageservice.getNextImage(this.current_id);
    this.current_id += 1;

  }

  PreviousImage() {

    this.binary_image = this.imageservice.getPreviousImage(this.current_id);
    this.current_id -= 1;

  }

  getImageid() : number{
    return this.imagesData[this.current_id].id
  }


  // getImages() {
  //   this._http.get('assets/img.json').subscribe((res: any) => {
 
  //    this.imagesData = res;

  //   }, error => {

  //     console.log(error);

  //   });

  // }

}


export interface ImagesJsonFormate {

  id: number;

  url : string;

  subsetId : number;

  toDelete : boolean;

  annotationIds : any
}

