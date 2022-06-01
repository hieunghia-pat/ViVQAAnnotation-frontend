import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserSubsetInterface } from '../interfaces/usersubset.interface';
import { ResponseErrorInterface } from '../interfaces/error.interface';
import { ErrorService } from './error.service';
import { AssignmentInterface } from '../interfaces/assignment.interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/subsets';
  errorMessage: string = "";
  errorStatus: number = 200;

  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) { }

  public assignmentToUserSubset(assignment: AssignmentInterface): UserSubsetInterface {
    return {
      userId: assignment.userId,
      subsetId: assignment.subsetId,
      assigned: assignment.assigned,
      assignedDate: assignment.assignedDate.toString(),
      finishDate: assignment.finishDate.toString(),
      validation: assignment.validation
    }
  }

  public userSubsetToAssignment(userSubset: UserSubsetInterface): AssignmentInterface {
    return {
      userId: userSubset.userId,
      subsetId: userSubset.subsetId,
      assigned: userSubset.assigned,
      assignedDate: moment(userSubset.assignedDate, "DD/MM/YYYY"),
      finishDate: moment(userSubset.finishDate, "DD/MM/YYYY"),
      validation: userSubset.validation
    }
  }

  public updateAssignment(assignment: UserSubsetInterface): Observable<any> {
    return this.httpClient.post(this.PATH_OF_API + "/assign/update", assignment).pipe(
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

  public deleteAssignment(assignment: UserSubsetInterface): Observable<any> {
    return this.httpClient.post(this.PATH_OF_API + "/assign/delete", assignment).pipe(
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
