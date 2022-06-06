import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserAuthService } from '../services/user-auth.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  @Input() error?: string | null;

  @Output() submitEventmitter = new EventEmitter();

  constructor(
    private loginService: LoginService,
    private userAuthService: UserAuthService,
    private router: Router
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


  submit() {
    console.log(this.form.value)
    this.loginService.login(this.form.value).subscribe(
      (response: any) => {
        this.loginService.isLoggedIn = true
        this.userAuthService.setAccessToken(response.access_token)
        this.userAuthService.setRefreshToken(response.refresh_token)
        let username :string = this.form.value.username;
        this.userAuthService.setUsername(username);
        let role: string = response.role;
        this.userAuthService.setRole(role)
        if (role === "ROLE_ADMIN") {
          this.router.navigate(["/admin"])
        }
        else {
          this.router.navigate(["/annotator"])
        }
      },
      error => {
        this.error = this.loginService.errorMessage
      }
    )
  }

}
