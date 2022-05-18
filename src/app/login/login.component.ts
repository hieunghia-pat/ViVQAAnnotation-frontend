import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { UserAuthService } from '../_services/user-auth.service';

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
        this.userAuthService.setAccessToken(response.accessToken)
        this.userAuthService.setRefreshToken(response.refreshToken)
        let role: string = response.user.role;
        if (role === "ROLE_ADMIN") {
          this.router.navigate(["/admin"])
        }
        else {
          this.router.navigate(["/annotator"])
        }
      }
    ),
    (error: any) => {
      console.log(error)
    }
  }

}
