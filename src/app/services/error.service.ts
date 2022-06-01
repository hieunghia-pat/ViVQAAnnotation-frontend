import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseErrorInterface } from '../interfaces/error.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public handlerResponseError(error: HttpErrorResponse): ResponseErrorInterface {
    switch (error.status) {
      case 0: {
        var errorInterface: ResponseErrorInterface = {
          status: error.status,
          message: `${error.message}. No response from error.`
        }

        return errorInterface;
      }

      case 401: {        
        var errorInterface: ResponseErrorInterface = {
          status: error.status,
          message: `${error.message}. Failed to authenticate.`
        }

        return errorInterface;
      }

      case 403: {
        var errorInterface: ResponseErrorInterface = {
          status: error.status,
          message: `${error.message}. Forbidden authorization.`
        }

        return errorInterface;
      }

      case 500: {
        var errorInterface: ResponseErrorInterface = {
          status: error.status,
          message: `${error.message}. Internal server error.`
        }

        return errorInterface;
      }

      default:
        var errorInterface: ResponseErrorInterface = {
          status: error.status,
          message: `${error.message}. Unknown error.`
        }

        return errorInterface;
    }
  }
}
