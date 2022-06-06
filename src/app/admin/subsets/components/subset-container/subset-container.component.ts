import { Component, OnInit } from '@angular/core';
import { SubsetItem } from '../interfaces/subset-item.interface';
import { SubsetService } from 'src/app/services/subset.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-subset-container',
  templateUrl: './subset-container.component.html',
  styleUrls: ['./subset-container.component.css']
})
export class SubsetContainerComponent implements OnInit {

  subsetItems!: SubsetItem[];

  public fetchingSubsets: boolean = false;

  constructor(
    private subsetService: SubsetService,
    private snackBar: MatSnackBar
  ) {
  }

  public toggleFetchingSubsets(): void {
    this.fetchingSubsets = !this.fetchingSubsets
  }

  ngOnInit(): void {
    this.toggleFetchingSubsets()
    this.subsetService.getSubsets().subscribe({
      next: (response: any) => {
        this.toggleFetchingSubsets()
        this.subsetItems = response
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingSubsets()
        if (error.status != 200) {
          this.snackBar.open(error.message)
        }
      }
    })
  }

  public openSubset(subsetId: number) {
    this.subsetService.getSubset(subsetId).subscribe({
      next: (response: any) => {
        console.log(response.subset)
      },
      error: (error: Error) => {
        console.log(error.message)
      }
    })
  }

}
