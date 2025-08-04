import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewReservationsComponent } from './components/view-reservations/view-reservations.component';
import { MakeAReservationComponent } from './components/make-a-reservation/make-a-reservation.component';

const routes: Routes = [
  { path: '', component: ViewReservationsComponent },
  { path: 'view-reservations', component: ViewReservationsComponent },
  { path: 'make-a-reservation', component: MakeAReservationComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
