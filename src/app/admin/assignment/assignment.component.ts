import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';

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
    private annotatorService: AnnotatorService
  ) { 

  }

  ngOnInit(): void {
    this.annotatorService.getAnnotators().subscribe(
      (response: any) => {
        this.annotators = response
        this.setUser(this.annotators[0])
      },
      (error: Error) => {
        console.error("Cannot fetch information of annotators from server")
      }
    )
  }

  public setUser(event: UserInterface) {
    this.selectedUser = event
  }

}
