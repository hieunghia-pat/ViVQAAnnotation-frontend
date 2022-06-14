import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/';

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    const token = this.userAuthService.getAccessToken();

    req = this.addToken(req, token);

    return next.handle(req).pipe(
      catchError((error): Observable<any> => {
        if (error instanceof HttpErrorResponse && !req.url.includes(this.PATH_OF_API + "/refresh-token") && error.status === 401)
          return this.refreshToken().pipe(
            switchMap((response: any) => {
              this.userAuthService.setAccessToken(response.body.accessToken)
              this.userAuthService.setRefreshToken(response.body.refreshToken)
              req = this.addToken(req, this.userAuthService.getAccessToken())

              return next.handle(req)
            }),
            catchError((error) => {
              let state: RouterStateSnapshot = this.router.routerState.snapshot
              this.router.navigate(["/login"], {
                queryParams: {
                  returnUrl: state.url
                }
              })

              return throwError(() => new Error((error && error.error && error.error.message) || error.statusText || "Failed to refresh the token. Please login again"))
            })
          )

        return throwError(() => new Error((error && error.error && error.error.message) || error.statusText || "Some unknown errors happened."))
      })
    )
  }

  private refreshToken(): Observable<any> {
    let token: string = this.userAuthService.getRefreshToken()
    return this.httpClient.post(this.PATH_OF_API + "/refresh-token", {}, {
      headers: new HttpHeaders({
        "Authorization": token
      })
    })
  }
}
