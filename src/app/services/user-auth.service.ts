import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRole(role: string) {
    localStorage.setItem('role', JSON.stringify(role));
  }

  public getRole(): [] {
    return JSON.parse(localStorage.getItem('role') || "{}");
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
    return this.getRole() && this.getAccessToken();
  }
}
