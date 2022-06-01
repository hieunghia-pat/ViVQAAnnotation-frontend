import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { AssignmentService } from 'src/app/services/assignment.service';
import { SubsetService } from 'src/app/services/subset.service';
import { AssignmentInterface } from 'src/app/interfaces/assignment.interface';
import * as moment from 'moment'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-subsets-assignment',
  templateUrl: './subsets-assignment.component.html',
  styleUrls: ['./subsets-assignment.component.css']
})
export class SubsetsAssignmentComponent implements OnInit, OnChanges {

  @Input() user!: UserInterface;

  private userSubsetInterfaces!: UserSubsetInterface[];
  public assignments!: AssignmentInterface[];

  public columnsToDisplay: string[] = ["subsetId", "assigned", "validation", "assignedDate", "finishDate", "update"];

  constructor(
    private subsetService: SubsetService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.subsetService.getSubsetByAnnotator(this.user.username).subscribe({
      next: (response: any) => {
        this.assignments = []
        this.userSubsetInterfaces = response
        this.userSubsetInterfaces.forEach((userSubsetInterface: UserSubsetInterface) => {
          this.assignments.push(this.assignmentService.userSubsetToAssignment(userSubsetInterface))
        })
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
    console.log(this.userSubsetInterfaces[index])
    if (this.userSubsetInterfaces[index].assigned)
      this.assignmentService.updateAssignment(this.userSubsetInterfaces[index]).subscribe({
        next: (response: HttpResponse<string>) => {
          console.log(response.body?.toString())
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
        }
      })
    else
      this.assignmentService.deleteAssignment(this.userSubsetInterfaces[index]).subscribe({
        next: (response: HttpResponse<string>) => {
          console.log(response.body?.toString())
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
        }
      })
  }

  public onAssignedChanged(index: number, value: boolean): void {
    this.userSubsetInterfaces[index].assigned = value
    this.assignments[index].assigned = value
  }

  public onAssignedDateChanged(index: number, date: string | null): void {
    if (date) {
      this.userSubsetInterfaces[index].assignedDate = date;
      this.assignments[index].assignedDate = this.getDate(date)
    }
    else {
      this.userSubsetInterfaces[index].assignedDate = "";
      this.assignments[index].assignedDate = this.getDate("")
    }
  }

  public onFinishDateChanged(index: number, date: string | null): void {
    if (date) {
      this.userSubsetInterfaces[index].finishDate = date
      this.assignments[index].finishDate = this.getDate(date)
    }
    else {
      this.userSubsetInterfaces[index].finishDate = ""
      this.assignments[index].finishDate = this.getDate("")
    }
  }

  public onValidationChanged(index: number, validation: boolean) {
    this.userSubsetInterfaces[index].validation = validation
    this.assignments[index].validation = validation
  }
}
