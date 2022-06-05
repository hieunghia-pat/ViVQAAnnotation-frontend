import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { ErrorService } from "./error.service";
import { AnnotatorInterface } from "../interfaces/annotator.interface";

@Injectable({
  providedIn: "root"
})
export class AnnotatorService {
  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/annotators';
  errorMessage: string = "";
  errorStatus: number = 200;

  constructor(
    private httpclient: HttpClient
  ) { }

  public getAnnotators() {
    return this.httpclient.get(this.PATH_OF_API + "/get")
  }

  public getAnnotator(annotatorName: string) {
    return this.httpclient.get(this.PATH_OF_API + `/get/${annotatorName}`)
  }

  public addAnnotator(annotator: AnnotatorInterface): Observable<any> {
    return this.httpclient.post(this.PATH_OF_API + "/add", annotator)
  }

  public updateAnnotator(annotator: AnnotatorInterface): Observable<any> {
    return this.httpclient.put(this.PATH_OF_API + `/update/${annotator.username}`, annotator)
  }

  public deleteAnnotator(annotatorName: string): Observable<any> {
    return this.httpclient.delete(this.PATH_OF_API + `/delete/${annotatorName}`)
  }

}