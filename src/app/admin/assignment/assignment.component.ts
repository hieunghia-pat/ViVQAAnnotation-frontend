import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

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
    private snackBarService: SnackBarService
  ) {

  }

  ngOnInit(): void {
    this.annotatorService.getAnnotators().subscribe({
      next: (response: any) => {
        this.annotators = response.body
        this.setUser(this.annotators[0])
      },
      error: (error: HttpErrorResponse) => {
        this.snackBarService.openSnackBar(error.message)
      }
    })
  }

  public setUser(event: UserInterface) {
    this.selectedUser = event
  }

}
