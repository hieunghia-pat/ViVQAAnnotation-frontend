import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(
    private userAuthService: UserAuthService,
    private router:Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    const token = this.userAuthService.getAccessToken();

    req = this.addToken(req, token);

    return next.handle(req)
  }

  private addToken(request:HttpRequest<any>, token:string) {
      return request.clone(
          {
              setHeaders: {
                  Authorization : `Bearer ${token}`
              }
          }
      );
  }
}
