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

  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/assignment';
  errorMessage: string = "";
  errorStatus: number = 200;

  constructor(
    private httpClient: HttpClient
  ) { }

  public assignmentToUserSubset(assignment: AssignmentInterface): UserSubsetInterface {
    return {
      id: assignment.id,
      userId: assignment.userId,
      subsetId: assignment.subsetId,
      assigned: assignment.assigned,
      assignedDate: assignment.assignedDate.format("DD/MM/YYYY").toString(),
      finishDate: assignment.finishDate.format("DD/MM/YYYY").toString(),
      validation: assignment.validation
    }
  }

  public userSubsetToAssignment(userSubset: UserSubsetInterface): AssignmentInterface {
    return {
      id: userSubset.id,
      userId: userSubset.userId,
      subsetId: userSubset.subsetId,
      assigned: userSubset.assigned,
      assignedDate: moment(userSubset.assignedDate, "DD/MM/YYYY"),
      finishDate: moment(userSubset.finishDate, "DD/MM/YYYY"),
      validation: userSubset.validation
    }
  }

  public addAssignment(assignment: UserSubsetInterface): Observable<any> {
    return this.httpClient.post(this.PATH_OF_API + "/add", assignment)
  }

  public updateAssignment(assignment: UserSubsetInterface): Observable<any> {
    return this.httpClient.post(this.PATH_OF_API + `/update/${assignment.id}`, assignment)
  }

  public deleteAssignment(assignment: UserSubsetInterface): Observable<any> {
    return this.httpClient.delete(this.PATH_OF_API + `/delete/${assignment.id}`)
  }

  public getAssignmentByAnnotator(annotatorName: string): Observable<any> {
    return this.httpClient.get(this.PATH_OF_API + `/get/${annotatorName}`)
  }
  
}
