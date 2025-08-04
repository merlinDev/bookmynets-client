import { Injectable } from "@angular/core";
import { NextCallback, ErrorCallback, ServiceHelper } from "../../common/service/service.helper";
import { ErrorModel } from "../../common/models/common/error.model";
import { AuthStorageHelper } from "./auth-storage.helper";
import { UserTokenModel } from "../models/user-token.model";
import { TokenModel } from "../models/token.model";
import { AuthModel } from "../models/auth.model";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private _loggedUser!: UserTokenModel | null
    private _subscription!: Subscription

    constructor(private _: ServiceHelper, private _store: AuthStorageHelper) { }

    public login(callback: NextCallback<TokenModel>, error: ErrorCallback<HttpErrorResponse>, data: AuthModel) {

        var login_data={
            "username":data.mobile_no,
            "password":data.password
        }
        this._.api().url('auth/portal/login').noAuth().json(data).post((r: TokenModel) => {

            // set logged in user to storage
            console.log(r);
            
            this._store.add_user(r.result);
            if(data.remember_me){
                this._store.add_remember_me(data);
            }else{
                this._store.clear_remember_me();
            }

            // set access token to api service
            this._.accessToken = r.result.token;

            // set logged in user details

            this._loggedUser = new UserTokenModel(r.result)

            // start timer and when token runout get another token
            this.start_timer()

            if (callback)
                callback(r)
        }, (e: HttpErrorResponse) => {
            if (error)
                error(e)
        })
    }

    public requestPasswordChange(callback: NextCallback<TokenModel>, error: ErrorCallback<HttpErrorResponse>, data: any) {
        this._.api().url('auth/reset_password').noAuth().json(data).post((r: TokenModel) => {

            // set logged in user to storage
           // this._store.add_user(r.result)

            // set access token to api service
            this._.accessToken = r.result.token;

            // set logged in user details
            this._loggedUser = new UserTokenModel(r.result)

            // start timer and when token runout get another token
            this.start_timer()

            if (callback)
                callback(r)
        }, (e: HttpErrorResponse) => {
            if (error)
                error(e)
        })
    }
    public resetPassword(callback: NextCallback<TokenModel>, error: ErrorCallback<HttpErrorResponse>, data: string) {
        this._.api().url('auth/set-password').noAuth().json(data).post((r: TokenModel) => {

            // // set logged in user to storage
            // this._store.add_user(r.result)

            // // set access token to api service
            // this._.accessToken = r.result.token;

            // // set logged in user details
            // this._loggedUser = new UserTokenModel(r.result)

            // // start timer and when token runout get another token
            // this.start_timer()

            if (callback)
                callback(r)
        }, (e: HttpErrorResponse) => {
            if (error)
                error(e)
        })
    }
    
    public VerifyOTP(callback: NextCallback<TokenModel>, error: ErrorCallback<HttpErrorResponse>, data: any) {
        this._.api().url('auth/verify_otp').noAuth().json(data).post((r: TokenModel) => {

            // // set logged in user to storage
            // this._store.add_user(r.result)

            // // set access token to api service
            // this._.accessToken = r.result.token;

            // // set logged in user details
            // this._loggedUser = new UserTokenModel(r.result)

            // // start timer and when token runout get another token
            // this.start_timer()

            if (callback)
                callback(r)
        }, (e: HttpErrorResponse) => {
            if (error)
                error(e)
        })
    }

    get isLoggedIn(): boolean {
        const data = this.getUserData();
        
        if (data) {
            const remainingTime = this.getRemainingTime(data.userData);
          
            if (remainingTime < 5000) {
                return false;
            }
            this._.accessToken = data.userData.token;
            return true;
        } else {

            return false;
        }
    }

    private getRemainingTime(data: UserTokenModel) {
        return new Date(data.expire_at).getTime() - new Date().getTime();
    }

    private getUserData(): { fromLocal: boolean, userData: UserTokenModel } | null {
        if (this._loggedUser?.expire_at) {
            return { fromLocal: true, userData: this._loggedUser };
        } else {
            const data = this._store.get_user();
      
            if (!data) {
                return null;
            }
            return { fromLocal: false, userData: data };
        }
    }

    private is_user_has_permission(permissions: Array<String>) {
        //TODO: impliment find user permissions here 
    }

    private start_timer() {
        //TODO start timer and get token form refresh token here
    }



    logOut() {
        this._loggedUser = null;
        this._store.clear_user()
    }
}