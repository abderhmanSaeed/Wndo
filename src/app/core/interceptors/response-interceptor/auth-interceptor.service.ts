import { LoginPhonePasswordComponent } from './../../../shared/components/modals/login-phone-password/login-phone-password.component';
import { ModalService } from './../../../shared/components/modal/modal.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../../data/service/auth/auth.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private modalService: ModalService, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle 401 errors
          this.authService.logout();
          this.openLoginModal();

        }
        return throwError(error);
      })
    );
  }
  openLoginModal() {
    this.modalService.open(LoginPhonePasswordComponent, {
      animations: {
        modal: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '36rem',
      },
    });
  }

}
