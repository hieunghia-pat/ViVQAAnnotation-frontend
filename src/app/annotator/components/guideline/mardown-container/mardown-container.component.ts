import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GuidelineService } from 'src/app/services/guideline.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-mardown-container',
  templateUrl: './mardown-container.component.html',
  styleUrls: ['./mardown-container.component.css']
})
export class MardownContainerComponent implements OnInit {

  public data!: string
  public fetchingData: boolean = false

  constructor(
    private guidelineService: GuidelineService,
    private snackBarService: SnackBarService
  ) { }

  public toggleFetchingData(): void {
    this.fetchingData = !this.fetchingData
  }

  ngOnInit(): void {
    this.toggleFetchingData()
    this.guidelineService.getGuideline().subscribe({
      next: (response: any) => {
        this.toggleFetchingData()
        this.data = response.body
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

}
