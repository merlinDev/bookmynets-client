import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ClientDetailsRoutingModule } from './client_details-routing.module';
import { ClientDetailsComponent } from './components/client_details/client_details.component';


@NgModule({
  declarations: [
    ClientDetailsComponent
  ],
  imports: [
    
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    ClientDetailsRoutingModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class ClientDetailsModule { }
