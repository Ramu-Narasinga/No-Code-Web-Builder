import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authToken = this.authService.getAuthorizationToken() ?? '';

    // Clone the request and set the new header in one step.
    const authReq = request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });

    console.log("inside the interceptor adter setting the headers::", authToken);

    return next.handle(authReq);
  }
}
