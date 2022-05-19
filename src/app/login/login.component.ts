import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  @Input() error?: string;

  @Output() submitEventmitter = new EventEmitter();

  constructor(
    private loginService: LoginService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    this.loginService.login(this.form.value).subscribe(
      (response: any) => {
        this.loginService.isLoggedIn = true
        this.userAuthService.setAccessToken(response.access_token)
        this.userAuthService.setRefreshToken(response.refresh_token)
        let role: string = response.role;
        this.userAuthService.setRole(role)
        if (role === "ROLE_ADMIN") {
          this.router.navigate(["/admin"])
        }
        else {
          this.router.navigate(["/annotator"])
        }
      }
    ),
    (error: any) => {
      
      console.error("Error occured! " + error)
    }
  }

}
