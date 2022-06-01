import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { ResponseErrorInterface } from "../interfaces/error.interface";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: "root"
})
export class SubsetService {
  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/subsets';
  errorMessage: string = "";
  errorStatus: number = 200;

  constructor(
    private httpclient: HttpClient,
    private errorService: ErrorService
  ) { }

  public getSubsets() {
    return this.httpclient.get(this.PATH_OF_API + "/get").pipe(
      catchError(
        (error: HttpErrorResponse) => {
          let errorInterface: ResponseErrorInterface = this.errorService.handlerResponseError(error)
          this.errorMessage = errorInterface.message
          this.errorStatus = errorInterface.status
          
          return throwError(() => new Error(errorInterface.message))
        }
      )
    )

  }

  public getSubsetByAnnotator(annotatorUsername: string) {
    return this.httpclient.get(this.PATH_OF_API + `/get/annotator/${annotatorUsername}`).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          let errorInterface: ResponseErrorInterface = this.errorService.handlerResponseError(error)
          this.errorMessage = errorInterface.message
          this.errorStatus = errorInterface.status
          
          return throwError(() => new Error(errorInterface.message))
        }
      )
    )
  }

  public getSubset(subsetId: number) {
    return this.httpclient.get(this.PATH_OF_API + `/get/subset/${subsetId}`).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          let errorInterface: ResponseErrorInterface = this.errorService.handlerResponseError(error)
          this.errorMessage = errorInterface.message
          this.errorStatus = errorInterface.status
          
          return throwError(() => new Error(errorInterface.message))
        }
      )
    )
  }

}