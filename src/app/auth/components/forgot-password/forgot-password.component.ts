import { Component } from '@angular/core';
import { ForgotPasswordFormModel } from '../../models/login/forgot-password.form.model';
import { LoginService } from '../../service/login.service';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  _login_form: ForgotPasswordFormModel;
  otp: string | null;
  email: string | null;
  _bool: boolean = true;
  errors: any ;
  constructor(private _auth_service: AuthService, private route: ActivatedRoute) {
    this._login_form = new ForgotPasswordFormModel()
    this.otp = this.route.snapshot.paramMap.get('otp');
    this.email = this.route.snapshot.paramMap.get('email');
    if (this.otp && this.email) {
      setTimeout(() => {
        this.VerifyOTP()
      }, 2000);

    }
  }
  requestPasswordChange() {

    this._bool=false;
  }
  VerifyOTP() {

    this._auth_service.VerifyOTP(
      (r: any) => {
        console.log(r);
        this._bool = false;
      },
      (e: HttpErrorResponse) => {
        if (e.status == 422) {
          e.error.detail.map((errorData: any) => {
            this.errors[errorData.loc[1]] = errorData.msg

          });
        } else if (e.status == 400) {
          e.error.detail
            this.errors = e.error.message

       
          console.log( e.error.message);
          
        }
      },
      {
        otp: this.otp,
        user_name: this.email
      }
    )

  }
}
