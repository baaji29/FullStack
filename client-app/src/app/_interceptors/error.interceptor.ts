import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private Routing: Router, private Toast: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        debugger
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const ErrorState = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    ErrorState.push(error.error.errors[key])
                  }
                }
                throw ErrorState.flat();
              } else {
                this.Toast.error(error.statusText === "OK" ? "Bad Request" : error.error, error.status);
              }
              break;
            case 401:
              this.Toast.error(error.statusText === "OK" ? "Unauthorized" : error.error, error.status)
              break;
            case 404:
              this.Routing.navigateByUrl('/not-found');
              break;
            case 500:
              const navigationExtras: NavigationExtras = { state: { error: error.error } }
              this.Routing.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.Toast.error('Something Unexpected happened')
              console.log(error)
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
