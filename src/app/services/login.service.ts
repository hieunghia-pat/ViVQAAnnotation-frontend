import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  PATH_OF_API = 'https://openvivqa-nlp-uit.herokuapp.com';
  redirectUrl: string | null = null;
  isLoggedIn: boolean = false;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  errorMessage: string | null = null;
  errorStatus: number | null = null;

  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: object) {
    return this.httpclient.post(this.PATH_OF_API + '/login', loginData, {
      headers: this.requestHeader,
    }).pipe(
      catchError(
          (err:HttpErrorResponse) => {
              switch (err.status) {
                case 0: {
                  this.errorMessage = "No response from server"
                  this.errorStatus = err.status
                  break;
                }

                case 401: {
                  this.errorMessage = "Failed to authenticated"
                  this.errorStatus = err.status
                  break;
                }

                case 403: {
                  this.errorMessage = "Forbidden authorization"
                  this.errorStatus = err.status
                  break;
                }

                case 500: {
                  this.errorMessage = "Internal server error"
                  this.errorStatus = err.status
                  break;
                }

                default:
                    this.errorMessage = "Unknown error"
                    this.errorStatus = err.status
              }

              return throwError(() => new Error(err.statusText));
          }
      )
    );
  }

  public roleMatch(allowedRole: string): boolean {
    const userRole: any = this.userAuthService.getRole();

    if (userRole === allowedRole)
      return true;
    
      return false;
  }
}
