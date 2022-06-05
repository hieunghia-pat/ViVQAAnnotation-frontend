import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserAuthService } from '../services/user-auth.service';
import { OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
  ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      this.router.navigate(["/logout"])
    }
  }

  private toggleFetchingInfo() {
    this.fetchingInfo = !this.fetchingInfo
  }


  submit() {
    this.toggleFetchingInfo()
    this.loginService.login(this.form.value).subscribe({
      next: (response: any) => {
        this.loginService.isLoggedIn = true
        this.userAuthService.setAccessToken(response.access_token)
        this.userAuthService.setRefreshToken(response.refresh_token)
        let role: string = response.role;
        this.userAuthService.setRole(role)
        this.toggleFetchingInfo()
        if (role === "ROLE_ADMIN") {
          this.router.navigate(["/admin"])
        }
        else {
          this.router.navigate(["/annotator"])
        }
      },
      error: error => {
        this.toggleFetchingInfo()
        this.snackBar.open(this.loginService.errorMessage!, "ok", {
          duration: 5000
        })
      }
    })
  }

}
