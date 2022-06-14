import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRole(role: string) {
    localStorage.setItem('role', JSON.stringify(role));
  }

  public getRole(): string | undefined {
    return JSON.parse(localStorage.getItem('role') || "{}");
  }

  public setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  public setRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken)
  }

  public setUsername (username : string){
    localStorage.setItem("user_name",username);
  }
  public getUsername (){
    return localStorage.getItem('user_name');
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
