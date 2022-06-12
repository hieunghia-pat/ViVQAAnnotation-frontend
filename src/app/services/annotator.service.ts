import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AnnotatorInterface } from "../interfaces/annotator.interface";

@Injectable({
  providedIn: "root"
})
export class AnnotatorService {
  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/annotators';

  constructor(
    private httpclient: HttpClient
  ) { }

  public getAnnotators() {
    return this.httpclient.get(this.PATH_OF_API + "/get")
  }

  public getAnnotatorByUsername(annotatorName: string) {
    return this.httpclient.get(this.PATH_OF_API + `/get/${annotatorName}`)
  }

  public getAnnotatorByUsernameWithPassword(annotatorName: string) {
    return this.httpclient.get(this.PATH_OF_API + `/get/with-password/${annotatorName}`)
  }

  public getAnnotatorById(id: string) {
    return this.httpclient.get(this.PATH_OF_API + `/get/annotator?id=${id}`)
  }

  public addAnnotator(annotator: AnnotatorInterface): Observable<any> {
    return this.httpclient.post(this.PATH_OF_API + "/add", annotator)
  }

  public updateAnnotator(annotator: AnnotatorInterface): Observable<any> {
    return this.httpclient.put(this.PATH_OF_API + `/update/${annotator.id}`, annotator)
  }

  public deleteAnnotator(annotatorName: string): Observable<any> {
    return this.httpclient.delete(this.PATH_OF_API + `/delete/${annotatorName}`)
  }

}