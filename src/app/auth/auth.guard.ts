import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean
  {
    console.log("Previous url is " + state.url)

    if (this.loginService.isLoggedIn) {
      const allowedRole = route.data['role'] as string;

      if (allowedRole) {
        const match = this.loginService.roleMatch(allowedRole);

        if (match) {
          return true;
        } 
        else {
          this.router.navigate(["/forbidden"]);
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}