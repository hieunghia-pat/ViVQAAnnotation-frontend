import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ImageService {
    PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/images';

  constructor(
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer
  ) { }

  public getImageInterfacesBySubset(subsetId: number): Observable<any> {
      return this.httpClient.get(this.PATH_OF_API + `/get/subset/${subsetId}`)
  }

  public getImage(imageId: number): Observable<any> {
      return this.httpClient.get(this.PATH_OF_API + `/get/image/${imageId}`)
  }

  public stringToImage(encodedImage: string): any {
    let objectURL = 'data:image/jpeg;base64,' + encodedImage;
    return this.domSanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
