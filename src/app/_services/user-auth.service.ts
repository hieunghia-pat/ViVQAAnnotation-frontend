import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') || "{}");
  }

  public setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  public setRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken)
  }

  public getAccessToken(): string {
    return localStorage.getItem('accessToken') || "";
  }

  public getRefreshToken(): string {
    return localStorage.getItem('refreshToken') || "";
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getAccessToken();
  }
}
