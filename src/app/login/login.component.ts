import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserAuthService } from '../services/user-auth.service';
import { OnInit } from '@angular/core'
import { SnackBarService } from '../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @Input() error?: string | null;

  @Output() submitEventmitter = new EventEmitter();

  public fetchingInfo: boolean = false;

  constructor(
    private loginService: LoginService,
    private userAuthService: UserAuthService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private snackBarService: SnackBarService
  ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.activatedRouter.queryParams.subscribe({
        next: (params: any) => {
          if (params.next)
            this.router.navigate([params.next])
          else {
            let role = this.userAuthService.getRole()
            console.log(role)
            if (role === "ROLE_ADMIN") {
              this.router.navigate(["/admin"])
            }
            else {
              this.router.navigate(["/annotator"])
            }
          }
        },
        error: (error: Error) => {
          console.error(error)
        }
      })
    }
  }

  private toggleFetchingInfo() {
    this.fetchingInfo = !this.fetchingInfo
  }

  submit() {
    this.toggleFetchingInfo()
    this.loginService.login(this.form.value).subscribe({
      next: (response: any) => {
        this.userAuthService.setAccessToken(response.accessToken)
        this.userAuthService.setRefreshToken(response.refreshToken)

        let username: string = this.form.value.username;
        this.userAuthService.setUsername(username);

        let role: string = response.role;
        this.userAuthService.setRole(role)

        this.toggleFetchingInfo()
        this.activatedRouter.queryParams.subscribe({
          next: (params: any) => {
            if (params.next)
              this.router.navigate([params.next])
            else
              if (role == "ROLE_ADMIN") {
                this.router.navigate(["/admin"])
              }
              else {
                this.router.navigate(["/annotator"])
              }
          },
          error: (error: Error) => {
            console.log(error)
          }
        })
      },
      error: (error) => {
        this.toggleFetchingInfo()
        const message = (error && error.error && error.error.message) || error.statusText
        this.snackBarService.openSnackBar(message)
      }
    })
  }

}
