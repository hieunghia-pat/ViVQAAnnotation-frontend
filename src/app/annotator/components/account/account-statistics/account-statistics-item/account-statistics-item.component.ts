import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AssignmentInterface } from 'src/app/interfaces/assignment.interface';
import { PosInterface } from 'src/app/interfaces/pos.interface';
import { StatisticsInterface } from 'src/app/interfaces/statistics.interface';
import { AssignmentService } from 'src/app/services/assignment.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-account-statistics-item',
  templateUrl: './account-statistics-item.component.html',
  styleUrls: ['./account-statistics-item.component.css']
})
export class AccountStatisticsItemComponent implements OnInit {

  @Input() username!: string;
  @Input() subsetId!: number;
  @Input() assignment!: AssignmentInterface

  public statistics!: StatisticsInterface
  public pos!: PosInterface
  public fetchingData: boolean = false

  constructor(
    private assignmentService: AssignmentService,
    private snackBarService: SnackBarService
  ) {

  }

  private toggleFetchingData(): void {
    this.fetchingData = !this.fetchingData
  }

  ngOnInit(): void {
    this.toggleFetchingData()
    this.assignmentService.getStatisticsByUsernamePerSubset(this.username, this.subsetId).subscribe({
      next: (response: any) => {
        this.statistics = response.body
        this.toggleFetchingData()
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  public getTotalDays(): number {
    let assignedDate = moment(this.assignment.assignedDate, "DD/MM/YYYY").toDate()
    let finishDate = moment(this.assignment.finishDate, "DD/MM/YYYY").toDate()
    let difference = Math.round((finishDate.getTime() - assignedDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
    
    return difference
  }

  public getRemainingDays(): number {
    let currentDate = new Date()
    let finishDate = moment(this.assignment.finishDate, "DD/MM/YYYY").toDate()
    let difference = Math.round((finishDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
    return difference > 0 ? difference : 0;
  }

}
