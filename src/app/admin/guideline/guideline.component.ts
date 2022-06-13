import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GuidelineService } from 'src/app/services/guideline.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css']
})
export class GuidelineComponent implements OnInit {

  public data: string = "";
  public fetchingGuideline: boolean = false;

  constructor(
    private guidelineService: GuidelineService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.toggleFetchingGuideline()
    this.guidelineService.getGuideline().subscribe({
      next: (response: any) => {
        this.toggleFetchingGuideline()
        this.data = response.body
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingGuideline()
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  public updateGuideline(): void {
    this.toggleFetchingGuideline()
    this.guidelineService.updateGuideline(this.data).subscribe({
      next: (response: any) => {
        this.toggleFetchingGuideline()
        this.snackBarService.openSnackBar(response.body)
        this.refreshGuideline()
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingGuideline()
        this.snackBarService.openSnackBar(error.message)
      }
    })    
  }

  public refreshGuideline(): void {
    this.toggleFetchingGuideline()
    this.guidelineService.getGuideline().subscribe({
      next: (response: any) => {
        this.toggleFetchingGuideline()
        this.data = response.body
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingGuideline()
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  public toggleFetchingGuideline(): void {
    this.fetchingGuideline = !this.fetchingGuideline
  }

}
