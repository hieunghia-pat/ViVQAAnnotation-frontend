import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SubsetService {
  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/subsets';
  errorMessage: string = "";
  errorStatus: number = 200;

  constructor(
    private httpclient: HttpClient
  ) { }

  public getSubsets() {
    return this.httpclient.get(this.PATH_OF_API + "/get").pipe(
      catchError(
        (error: HttpErrorResponse) => {
          switch (error.status) {
            case 0: {
              this.errorMessage = "No response from server"
              this.errorStatus = error.status
              break;
            }

            case 401: {
              this.errorMessage = "Failed to authenticated"
              this.errorStatus = error.status
              break;
            }

            case 403: {
              this.errorMessage = "Forbidden authorization"
              this.errorStatus = error.status
              break;
            }

            case 500: {
              this.errorMessage = "Internal server erroror"
              this.errorStatus = error.status
              break;
            }

            default:
              this.errorMessage = "Unknown erroror"
              this.errorStatus = error.status
          }
          return throwError(() => new Error(error.statusText));
        }
      )
    )

  }

  public getSubsetByAnnotator(annotatorUsername: string) {
    return this.httpclient.get(this.PATH_OF_API + `/get/annotator/${annotatorUsername}`).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          switch (error.status) {
            case 0: {
              this.errorMessage = "No response from server"
              this.errorStatus = error.status
              break;
            }

            case 401: {
              this.errorMessage = "Failed to authenticated"
              this.errorStatus = error.status
              break;
            }

            case 403: {
              this.errorMessage = "Forbidden authorization"
              this.errorStatus = error.status
              break;
            }

            case 500: {
              this.errorMessage = "Internal server erroror"
              this.errorStatus = error.status
              break;
            }

            default:
              this.errorMessage = "Unknown erroror"
              this.errorStatus = error.status
          }
          return throwError(() => new Error(error.statusText));
        }
      )
    )
  }

  public getSubset(subsetId: number) {
    return this.httpclient.get(this.PATH_OF_API + `/get/subset/${subsetId}`).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          switch (error.status) {
            case 0: {
              this.errorMessage = "No response from server"
              this.errorStatus = error.status
              break;
            }

            case 401: {
              this.errorMessage = "Failed to authenticated"
              this.errorStatus = error.status
              break;
            }

            case 403: {
              this.errorMessage = "Forbidden authorization"
              this.errorStatus = error.status
              break;
            }

            case 500: {
              this.errorMessage = "Internal server erroror"
              this.errorStatus = error.status
              break;
            }

            default:
              this.errorMessage = "Unknown erroror"
              this.errorStatus = error.status
          }
          return throwError(() => new Error(error.statusText));
        }
      )
    )
  }

}