import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubsetInterface } from 'src/app/interfaces/subset.interface';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { SubsetService } from 'src/app/services/subset.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent implements OnInit {

  public subsetInterfaces!: SubsetInterface[]

  public fetchingSubset: boolean = false;

  public selectedSubset!: SubsetInterface

  constructor(
    private subsetService: SubsetService,
    private userAuthService: UserAuthService,
    private router: Router,
    private snackBarService: SnackBarService
  ) { }

  private toggleFetchingSubset(): void {
    this.fetchingSubset = !this.fetchingSubset
  }

  ngOnInit(): void {
    this.toggleFetchingSubset()
    this.subsetService.getSubsetByAnnotator(this.userAuthService.getUsername()!).subscribe({
      next: (response: any) => {
        this.toggleFetchingSubset()
        if (response.status == 200) {
          this.subsetInterfaces = response.body
          this.selectedSubset = this.subsetInterfaces[0] // the first subset is selected by default
        }
        else {
          this.snackBarService.openSnackBar(response.error)
        }
      }
    })
  }

}
