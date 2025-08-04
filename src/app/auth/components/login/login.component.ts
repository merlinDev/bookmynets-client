import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service'
import { TokenModel } from '../../models/token.model';  
import { ErrorModel } from '../../../common/models/common/error.model'; 
import { AuthModel } from '../../models/auth.model'; 
import { LoginFormModel } from '../../models/login/login.form.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  _login_form: LoginFormModel;
  _array:Array<number> = [1,2,3,4,5]
  errors: any ;
  isLoading: boolean = false;
  
  constructor(private _auth_service: LoginService, private router: Router,private activated_route: ActivatedRoute) {
    if(activated_route.snapshot.data){
      console.log("dxsdds---",activated_route.snapshot.data['resoledData']);
      this._login_form = new LoginFormModel(activated_route.snapshot.data['resoledData'])
    }else{
      this._login_form = new LoginFormModel()
    }
   
  }

  ngOnInit(): void {
  }

  /**
   * Try for user login
   * @param auth login credential
   */
  tryToLogIn(auth: AuthModel): void {
    this.isLoading = true;
    this._auth_service.tryToLogIn(
      (r: TokenModel) => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }, (e: HttpErrorResponse) => {
        this.isLoading = false;
        if (e.status == 422) {
          e.error.detail.map((errorData: any) => {
          this.errors = errorData.msg

          });
        }else  if (e.status == 401) {
          this.errors = e.error.message

        }
      }, auth)
  }

  onLoginFormSubmit() {    
    this.errors = null;
    if (this._login_form.is_valid()) {
      this.tryToLogIn(this._login_form.get_value())
    }
  }

}