import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnersComponent } from './components/partners/partners.component';
import { PendingAplicationsComponent } from './components/pending-aplications/pending-aplications.component';
import { ViewPartnerComponent } from './components/view-partner/view-partner.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PendingPaymentsComponent } from './components/pending-payments/pending-payments.component';
import { ViewApplicationComponent } from './components/view-application/view-application.component';

const routes: Routes = [
    { path: 'partners', component:  PartnersComponent},
    { path: 'pending-aplications', component:  PendingAplicationsComponent},
    { path: 'view-partner', component:  ViewPartnerComponent},
    { path: 'view-application', component:  ViewApplicationComponent},
    { path: 'payments', component:  PaymentsComponent},
    { path: 'pending-payments', component:  PendingPaymentsComponent}
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdministratorRoutingModule { }