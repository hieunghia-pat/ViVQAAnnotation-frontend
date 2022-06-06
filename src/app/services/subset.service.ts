import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SubsetService {
  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/subsets';

  constructor(
    private httpclient: HttpClient
  ) { }

  public getSubsets() {
    return this.httpclient.get(this.PATH_OF_API + "/get")
  }

  public getSubsetByAnnotator(annotatorUsername: string) {
    return this.httpclient.get(this.PATH_OF_API + `/get/annotator/${annotatorUsername}`)
  }

  public getSubset(subsetId: number) {
    return this.httpclient.get(this.PATH_OF_API + `/get/subset/${subsetId}`)
  }

}