import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkWeekManageComponent } from './components/work-week-manage/work-week-manage.component';

const routes: Routes = [
  { path: '', component: WorkWeekManageComponent },
 // { path: 'payments', component: PaymentsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkWeekManageRoutingModule { }
