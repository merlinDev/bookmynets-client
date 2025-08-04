import { Component, EventEmitter, Output } from '@angular/core';
import { ForgotPasswordFormModel } from '../../models/login/forgot-password.form.model';
import { LoginService } from '../../service/login.service';
import { TokenModel } from '../../models/token.model';
import { ErrorModel } from '../../../common/models/common/error.model';
import { AuthModel } from '../../models/auth.model';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-request-password-change',
  templateUrl: './request-password-change.component.html',
  styleUrl: './request-password-change.component.scss'
})
export class RequestPasswordChangeComponent {
  @Output() continue = new EventEmitter<string>(); 

  _request_password_change_form: ForgotPasswordFormModel;
  constructor(private _auth_service: AuthService) {
    this._request_password_change_form = new ForgotPasswordFormModel()
  }
  /**
   * Try for user login
   * @param auth login credential
   */
  tryRequestPassword(auth: any): void {
    // this._auth_service.tryToLogIn(
    //   (r: TokenModel) => {
    //     //TODO: Impliemt login stratergy here
    //     console.log(r);
    //   }, (e: ErrorModel) => {
    //     console.log(e);
    //   }, auth)

    this._auth_service.requestPasswordChange(
      (r: any) => {
        this.continue.emit();
      }, (e: HttpErrorResponse) => {

      },   this._request_password_change_form.get_value())
    
  }

  onRequestPasswordFormSubmit() {
    if (this._request_password_change_form.is_valid()) {
      this.tryRequestPassword(this._request_password_change_form.get_value())
    }
  }
}
