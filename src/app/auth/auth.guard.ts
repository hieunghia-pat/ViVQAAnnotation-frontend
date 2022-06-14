import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } })
      return false
    }

    const allowedRole = route.data['role'] as string;
    const match = this.loginService.roleMatch(allowedRole);
    if (!match) {
      this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
      return false;
    }

    return true
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state)
  }
}
