import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRole(role: string) {
    localStorage.setItem('role', role);
  }

  public getRole() {
    return localStorage.getItem('role')
  }

  public setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  public setRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken)
  }

  public setUsername (username : string) {
    localStorage.setItem("userName",username);
  }

  public getUsername (){
    return localStorage.getItem('userName');
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
}
