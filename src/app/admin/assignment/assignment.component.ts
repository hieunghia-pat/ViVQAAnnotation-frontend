import { Component, OnInit } from '@angular/core';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SubsetService } from 'src/app/services/susbet.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public annotatorIds!: string[];
  public subsetIds!: string[];

  constructor(
    private annotatorService: AnnotatorService,
    private subsetService: SubsetService
  ) { 

  }

  ngOnInit(): void {
    this.annotatorService.getAnnotators().subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: Error) => {
        console.log(error.message)
      }
    )
  }

}
