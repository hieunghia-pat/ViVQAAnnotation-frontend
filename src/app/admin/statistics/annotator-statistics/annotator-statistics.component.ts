import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AssignmentInterface } from 'src/app/interfaces/assignment.interface';
import { PosInterface } from 'src/app/interfaces/pos.interface';
import { StatisticsInterface } from 'src/app/interfaces/statistics.interface';
import { AssignmentService } from 'src/app/services/assignment.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-annotator-statistics',
  templateUrl: './annotator-statistics.component.html',
  styleUrls: ['./annotator-statistics.component.css']
})
export class AnnotatorStatisticsComponent implements OnInit, OnChanges {

  @Input() annotator!: AnnotatorInterface

  public assignments!: AssignmentInterface[]
  public fetchingAssignments: boolean = false
  public fetchingStatistics: boolean = false

  public statistics!: StatisticsInterface
  public pos!: PosInterface

  constructor(
    private assignmentService: AssignmentService,
    private snackBarService: SnackBarService
  ) { }

  private toggleFetchingAssignments(): void {
    this.fetchingAssignments = !this.fetchingAssignments
  }

  private toggleFetchingStatistics(): void {
    this.fetchingStatistics = !this.fetchingStatistics
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.annotator != undefined) {
      this.toggleFetchingAssignments()
      this.assignmentService.getAssignmentByAnnotator(this.annotator.username).subscribe({
        next: (response: any) => {
          this.toggleFetchingAssignments()
          this.assignments = response.body
        },
        error: (error: HttpErrorResponse) => {
          this.toggleFetchingAssignments()
          this.snackBarService.openSnackBar(error.message)
        }
      })
    }
  }

  public fetchStatistics(index: number): void {
    let assignment: AssignmentInterface = this.assignments[index]
    this.toggleFetchingStatistics()
    this.assignmentService.getStatisticsByUsernamePerSubset(this.annotator.username, assignment.subsetId).subscribe({
      next: (response: any) => {
        this.statistics = response.body
        this.toggleFetchingStatistics()
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingStatistics()
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

}
