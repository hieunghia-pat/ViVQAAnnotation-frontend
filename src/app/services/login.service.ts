import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  PATH_OF_API = 'http://localhost:8080';
  redirectUrl: string | null = null;
  isLoggedIn: boolean = false;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: object) {
    return this.httpclient.post(this.PATH_OF_API + '/login', loginData, {
      headers: this.requestHeader,
    })
  }

  public roleMatch(allowedRole: string): boolean {
    const userRole: any = this.userAuthService.getRole();

    if (userRole === allowedRole)
      return true;
    
      return false;
  }
}
