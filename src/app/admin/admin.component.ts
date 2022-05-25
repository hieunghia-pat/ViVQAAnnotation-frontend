import { Component } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

    public opened: boolean = true;

    constructor(
      private userAuthService: UserAuthService,
      private router: Router) {
    }

    logout(): void {
      this.userAuthService.clear()
      this.router.navigate(["/login"])
    }
}
