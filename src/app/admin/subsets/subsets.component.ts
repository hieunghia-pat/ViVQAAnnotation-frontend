import { Component, OnInit } from '@angular/core';
import { SubsetItemInterface } from './model/subset-item-interface';

@Component({
  selector: 'app-subsets',
  templateUrl: './subsets.component.html',
  styleUrls: ['./subsets.component.css']
})
export class SubsetsComponent implements OnInit {

  subsetItems: SubsetItemInterface[] = [
    {
      subsetName: "subset 1",
      totalAnnotations: 100,
      totalImages: 50,
      totalAssignedAnnotations: 5
    },
    {
      subsetName: "subset 2",
      totalAnnotations: 100,
      totalImages: 50,
      totalAssignedAnnotations: 5
    },
    {
      subsetName: "subset 3",
      totalAnnotations: 100,
      totalImages: 50,
      totalAssignedAnnotations: 5
    },
    {
      subsetName: "subset 4",
      totalAnnotations: 100,
      totalImages: 50,
      totalAssignedAnnotations: 5
    },
    {
      subsetName: "subset 5",
      totalAnnotations: 100,
      totalImages: 50,
      totalAssignedAnnotations: 5
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
