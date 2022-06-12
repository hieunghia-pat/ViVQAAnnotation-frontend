import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { AnnotatorService } from 'src/app/services/annotator.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public information!: AnnotatorInterface
  public fetchingInformation: boolean = false

  constructor(
    private annotatorService: AnnotatorService,
    private userAuthService: UserAuthService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.toggleFetchingInformation()
    this.annotatorService.getAnnotatorByUsernameWithPassword(this.userAuthService.getUsername()!).subscribe({
      next: (response: any) => {
        this.toggleFetchingInformation()
        if (response.status == 200) {
          this.information = response.body
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      },
      error: (error: HttpErrorResponse) => {
        this.toggleFetchingInformation()
        this.snackBarService.openSnackBar(`Status ${error.status}. Status text: ${error.statusText}. Error: ${error.message}`)
      }
    })
  }

  private toggleFetchingInformation(): void {
    this.fetchingInformation = !this.fetchingInformation
  }

}
