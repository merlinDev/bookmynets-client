import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '../common/common.module';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'reservations', loadChildren: () => import('../reservations/reservations.module').then(m => m.ReservationsModule) },

    ]

  },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },

    ]

  },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'payments', loadChildren: () => import('../payments/payments.module').then(m => m.PaymentsModule) },

    ]

  },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'work_week_manage', loadChildren: () => import('../work_week_manage/work_week_manage.module').then(m => m.WorkWeekManageModule) },

    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
