import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { SubsetService } from 'src/app/services/subset.service';

@Component({
  selector: 'app-subsets-assignment',
  templateUrl: './subsets-assignment.component.html',
  styleUrls: ['./subsets-assignment.component.css']
})
export class SubsetsAssignmentComponent implements OnInit, OnChanges {

  @Input() user: UserInterface | null = null;

  public userSubsetInterfaces: UserSubsetInterface[] | null = null;

  public columnsToDisplay: string[] = ["subsetId", "assigned", "isValidation", "assignDate", "finishDate"];

  constructor(
    private subsetService: SubsetService
  ) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user)
      this.getUserSubsetInterface(this.user.username)
  }

  public getUserSubsetInterface(username: string): void {
    this.subsetService.getSubsetByAnnotator(username).subscribe(
      (response: any) => {
        this.userSubsetInterfaces = response
      },
      (error: Error) => {
        console.log(error.message)
      }
    )
  }

}
