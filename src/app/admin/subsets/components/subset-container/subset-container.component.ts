import { Component, OnInit } from '@angular/core';
import { SubsetItem } from '../interfaces/subset-item.interface';
import { SubsetService } from 'src/app/services/susbet.service';

@Component({
  selector: 'app-subset-container',
  templateUrl: './subset-container.component.html',
  styleUrls: ['./subset-container.component.css']
})
export class SubsetContainerComponent implements OnInit {

  subsetItems!: SubsetItem[];

  constructor(
    private subsetService: SubsetService
  ) {
    this.subsetItems = [
      {
        subsetId: 1,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 2,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 3,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },

      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },{
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
      {
        subsetId: 4,
        totalImages: 10,
        totalAnnotations: 1,
        totalAnnotators: 20,
        totalCompleted: 0
      },
    ]
  }

  ngOnInit(): void {
    // this.subsetService.getSubsetItems().subscribe(
    //   (response: any) => {
    //     console.log(response.subsets)
    //   },
    //   (error: Error) => {
    //     console.log(error.message)
    //   }
    // )
  }

  public openSubset(subsetId: number) {
    this.subsetService.getSubsetItem(subsetId).subscribe(
      (response: any) => {
        console.log(response.subset)
      },
      (error: Error) => {
        console.log(error.message)
      }
    )
  }

}
