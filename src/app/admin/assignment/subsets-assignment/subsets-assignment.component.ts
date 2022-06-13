import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { AssignmentService } from 'src/app/services/assignment.service';
import { AssignmentInterface } from 'src/app/interfaces/assignment.interface';
import * as moment from 'moment'
import { NIL } from 'uuid';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from 'src/app/services/snackbar.service';

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
    private assignmentService: AssignmentService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleFetchingTable()
    this.assignmentService.getAssignmentByAnnotator(this.user.username).subscribe({
      next: (response: any) => {
        this.assignments = []
        let userSubsetInterfaces = response.body
        userSubsetInterfaces.forEach((userSubsetInterface: UserSubsetInterface) => {
          this.assignments.push(this.assignmentService.userSubsetToAssignment(userSubsetInterface))
        })
        this.toggleFetchingTable()
      },
      error: (error: HttpErrorResponse) => {
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  private toggleFetchingTable(): void {
    this.fetchingTable = !this.fetchingTable
  }

  private refreshSubsets(index: number): void {
    this.toggleFetchingTable()
    this.assignmentService.getAssignmentByAnnotator(this.user.username).subscribe({
      next: (response: any) => {
        let userSubsetInterfaces: UserSubsetInterface[] = response.body
        this.assignments[index] = this.assignmentService.userSubsetToAssignment(userSubsetInterfaces[index])
        this.toggleFetchingTable()
      },
      error: (error: HttpErrorResponse) => {
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  private getDate(date: string): moment.Moment {
    return moment(date, "DD/MM/YYYY")
  }

  public updateAssignment(index: number): void {
    let assignment: UserSubsetInterface = this.assignmentService.assignmentToUserSubset(this.assignments[index])

    if (assignment.id == NIL && assignment.assigned == false) // nothing to do
      return

    if (assignment.id == NIL && assignment.assigned) { // add new assignment
      this.assignmentService.addAssignment(assignment).subscribe({
        next: (response: any) => {
          this.refreshSubsets(index)
        },
        error: (error: HttpErrorResponse) => {
          this.snackBarService.openSnackBar(error.message)
        }
      })
      return
    }

    if (assignment.id != NIL && !assignment.assigned) { // delete available assignment
      this.assignmentService.deleteAssignment(assignment).subscribe({
        next: (response: any) => {
          this.refreshSubsets(index)
        },
        error: (error: HttpErrorResponse) => {
          this.snackBarService.openSnackBar(error.message)
        }
      })
      this.refreshSubsets(index)
      return
    }

    // else update available assignment
    this.assignmentService.updateAssignment(assignment).subscribe({
      next: (response: any) => {
        this.refreshSubsets(index)
      },
      error: (error: HttpErrorResponse) => {
        this.snackBarService.openSnackBar(error.message)
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
