import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResetPasswordFormModel } from '../../models/login/reset-password.form.model';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent  {
  @Input() guid: string | null = null;
  errors:any;
  _reset_password_form: ResetPasswordFormModel;
  constructor(private router: Router,private _auth_service: AuthService) {
    this._reset_password_form = new ResetPasswordFormModel()
  }

  ngAfterViewInit(): void {

    this._reset_password_form.form.value.guid=this.guid;
  }
    /**
   * Try for user login
   * @param auth login credential
   */
    tryResetPassword(auth: any): void {
      this._reset_password_form.form.value.guid=this.guid;
      this.errors=null
      this._auth_service.resetPassword(
        (r: any) => {
          console.log(r);
          this.router.navigate(['auth/login']);
        },
        (e: HttpErrorResponse) => {
          if (e.status == 422) {
            e.error.detail.map((errorData: any) => {
              this.errors= errorData.msg
  
            });
          } else if (e.status == 400) {
            e.error.detail
              this.errors = e.error.message
  
         
            console.log( e.error.message);
            
          }
        },this._reset_password_form.get_value()
      )
    }
  
    onResetPasswordFormSubmit() {
      if (this._reset_password_form.is_valid()) {
        this.tryResetPassword(this._reset_password_form.get_value())
      }
    }
}
