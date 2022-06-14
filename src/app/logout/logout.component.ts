import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userAuthService.clear()
    this.router.navigate(["/login"])
  }

  logout(): void {
    this.userAuthService.clear()
    this.router.navigate(["/login"])
  }

}
