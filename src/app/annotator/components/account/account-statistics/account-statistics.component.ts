import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AssignmentInterface } from 'src/app/interfaces/assignment.interface';
import { PosInterface } from 'src/app/interfaces/pos.interface';
import { StatisticsInterface } from 'src/app/interfaces/statistics.interface';
import { AssignmentService } from 'src/app/services/assignment.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-account-statistics',
  templateUrl: './account-statistics.component.html',
  styleUrls: ['./account-statistics.component.css']
})
export class AccountStatisticsComponent implements OnInit {

  @Input() annotator!: AnnotatorInterface

  public assignments!: AssignmentInterface[]
  public fetchingAssignments: boolean = false

  public statistics!: StatisticsInterface
  public pos!: PosInterface

  constructor(
    private assignmentService: AssignmentService,
    private snackBarService: SnackBarService
  ) { }

  private toggleFetchingAssignments(): void {
    this.fetchingAssignments = !this.fetchingAssignments
  }

  ngOnInit(): void {
    if (this.annotator != undefined) {
      this.toggleFetchingAssignments()
      this.assignmentService.getAssignedAssignmentByAnnotator(this.annotator.username).subscribe({
        next: (response: any) => {
          console.log(response)
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

}
