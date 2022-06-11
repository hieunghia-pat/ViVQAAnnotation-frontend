import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { SubsetInterface } from 'src/app/interfaces/subset.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { SubsetService } from 'src/app/services/subset.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public subsets!: SubsetInterface[]
  public annotators!: AnnotatorInterface[]

  public selectedSubset!: SubsetInterface
  public selectedAnnotator!: AnnotatorInterface

  public fetchingData: boolean = false

  constructor(
    private subsetService: SubsetService,
    private annotatorService: AnnotatorService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.fetchAnnotators()
  }

  public toggleFetchingData(): void {
    this.fetchingData = !this.fetchingData
  }

  public onTabChanged(tabIndex: number): void {
    if (tabIndex == 0)
      this.fetchAnnotators()
    else
      this.fetchSubsets()
      
  }

  public fetchSubsets() {
    this.toggleFetchingData()
    this.subsetService.getSubsets().subscribe({
      next: (response: any) => {
        this.toggleFetchingData()
        this.subsets = response.body
        this.onSubsetChanged(0)
      },
      error: (error:HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  public fetchAnnotators() {
    this.toggleFetchingData()
    this.annotatorService.getAnnotators().subscribe({
      next: (response: any) => {
        this.toggleFetchingData()
        this.annotators = response.body
        this.onAnnotatorChanged(0)
      },
      error: (error:HttpErrorResponse) => {
        this.toggleFetchingData()
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  public onAnnotatorChanged(index: number) {
    this.selectedAnnotator = this.annotators[index]
  }

  public onSubsetChanged(index: number) {
    this.selectedSubset = this.subsets[index]
  }

}
