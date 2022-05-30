import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SubsetService } from 'src/app/services/subset.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public annotators!: UserInterface[];
  public subsets!: UserSubsetInterface[];

  public selectedUser!: UserInterface;

  constructor(
    private annotatorService: AnnotatorService,
    private subsetService: SubsetService
  ) { 

  }

  ngOnInit(): void {
    this.annotatorService.getAnnotators().subscribe(
      (response: any) => {
        this.annotators = response
        this.setUsername(this.annotators[0])
      },
      (error: Error) => {
        console.error("Cannot fetch information of annotators from server")
      }
    )
  }

  public setUsername(event: UserInterface) {
    this.selectedUser = event;
    this.getSubsetsForAnnotator(this.selectedUser.username)
  }

  public getSubsetsForAnnotator(annotatorUsername: string) {
    this.subsetService.getSubsetByAnnotator(annotatorUsername).subscribe(
      (response: any) => {
        this.subsets = response
      },
      (error: Error) => {
        console.error(`Cannot fetch subsets for annotator ${annotatorUsername}. Please contact admin to have more information.`)
      }
    )
  }

}
