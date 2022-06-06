import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { AssignmentService } from 'src/app/services/assignment.service';
import { SubsetService } from 'src/app/services/subset.service';
import { AssignmentInterface } from 'src/app/interfaces/assignment.interface';
import * as moment from 'moment'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NIL } from 'uuid';

@Component({
  selector: 'app-subsets-assignment',
  templateUrl: './subsets-assignment.component.html',
  styleUrls: ['./subsets-assignment.component.css']
})
export class SubsetsAssignmentComponent implements OnInit, OnChanges {

  @Input() user!: UserInterface;
  
  public fetchingTable: boolean = false

  public assignments!: AssignmentInterface[];

  public columnsToDisplay: string[] = ["subsetId", "assigned", "validation", "assignedDate", "finishDate", "update"];

  constructor(
    private subsetService: SubsetService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleFetchingTable()
    this.subsetService.getSubsetByAnnotator(this.user.username).subscribe({
      next: (response: any) => {
        this.assignments = []
        let userSubsetInterfaces = response
        userSubsetInterfaces.forEach((userSubsetInterface: UserSubsetInterface) => {
          this.assignments.push(this.assignmentService.userSubsetToAssignment(userSubsetInterface))
        })
        this.toggleFetchingTable()
      },
      error: (error: Error) => {
        console.log(error.message)
      }
    })
  }

  private toggleFetchingTable(): void {
    this.fetchingTable = !this.fetchingTable
  }

  private refreshSubsets(index: number): void {
    this.toggleFetchingTable()
    this.subsetService.getSubsetByAnnotator(this.user.username).subscribe({
      next: (response: any) => {
        console.log(response)
        let userSubsetInterfaces: UserSubsetInterface[] = response
        this.assignments[index] = this.assignmentService.userSubsetToAssignment(userSubsetInterfaces[index])
        this.toggleFetchingTable()
      },
      error: (error: Error) => {
        console.log(error.message)
      }
    })
  }

  private getDate(date: string): moment.Moment {
    return moment(date, "DD/MM/YYYY")
  }

  public updateAssignment(index: number): void {
    let assignment: UserSubsetInterface = this.assignmentService.assignmentToUserSubset(this.assignments[index])
    console.log(assignment)
    
    if (assignment.id == NIL && assignment.assigned == false) // nothing to do
      return
    
    if (assignment.id == NIL && assignment.assigned) { // add new assignment
      console.log("add new assignment")
      this.assignmentService.addAssignment(assignment).subscribe({
        next: (response: HttpResponse<string>) => {
          console.log(response.body?.toString())
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
        }
      })
      this.refreshSubsets(index)
      return
    }

    if (assignment.id != NIL && !assignment.assigned) { // delete available assignment
      this.assignmentService.deleteAssignment(assignment).subscribe({
        next: (response: HttpResponse<string>) => {
          console.log(response.body?.toString())
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
        }
      })
      this.refreshSubsets(index)
      return
    }

    // else update available assignment
    this.assignmentService.updateAssignment(assignment).subscribe({
      next: (response: HttpResponse<string>) => {
        console.log(response.body?.toString())
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    })
    this.refreshSubsets(index)
  }

  public onAssignedChanged(index: number, value: boolean): void {
    this.assignments[index].assigned = value
  }

  public onAssignedDateChanged(index: number, date: string | null): void {
    if (date) {
      this.assignments[index].assignedDate = this.getDate(date)
    }
    else {
      this.assignments[index].assignedDate = this.getDate("")
    }
  }

  public onFinishDateChanged(index: number, date: string | null): void {
    if (date) {
      this.assignments[index].finishDate = this.getDate(date)
    }
    else {
      this.assignments[index].finishDate = this.getDate("")
    }
  }

  public onValidationChanged(index: number, validation: boolean) {
    this.assignments[index].validation = validation
  }
}
