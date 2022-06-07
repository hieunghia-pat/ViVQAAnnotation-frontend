import { Component, OnInit } from '@angular/core';
import { SubsetItem } from '../interfaces/subset-item.interface';
import { SubsetService } from 'src/app/services/subset.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from 'src/app/services/snackbar.service';

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
    private snackBarService: SnackBarService
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
        if (response.status == 200) {
          this.subsetItems = response.body
        }
        else {
          this.snackBarService.openSnackBar(response.error)          
        }
      }
    })
  }

}
