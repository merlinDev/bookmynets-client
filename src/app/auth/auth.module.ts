import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RequestPasswordChangeComponent } from './components/request-password-change/request-password-change.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RequestPasswordChangeComponent,
    ResetPasswordComponent,

  ],
  imports: [
    
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    AuthRoutingModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule { }
