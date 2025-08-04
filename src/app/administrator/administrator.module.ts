import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PartnersComponent } from './components/partners/partners.component';
import { PendingAplicationsComponent } from './components/pending-aplications/pending-aplications.component';
import { ViewPartnerComponent } from './components/view-partner/view-partner.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PendingPaymentsComponent } from './components/pending-payments/pending-payments.component';
import { ViewApplicationComponent } from './components/view-application/view-application.component';

@NgModule({
  declarations: [
    PartnersComponent,
    PendingAplicationsComponent,
    ViewPartnerComponent,
    PaymentsComponent,
    PendingPaymentsComponent,
    ViewApplicationComponent
  ],
  imports: [
    
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    AdministratorRoutingModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class AdministratorModule { }
