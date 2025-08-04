import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEventsComponent } from './components/view-events/view-events.component';
import { AddUpdateEventsComponent } from './components/add-update-events/add-update-events.component';

const routes: Routes = [
  { path: '', component: ViewEventsComponent },
  { path: 'view-events', component: ViewEventsComponent },
  { path: 'add-events', component: AddUpdateEventsComponent },
  { path: 'update-events/', component: AddUpdateEventsComponent },
  { path: 'update-events/:events', component: AddUpdateEventsComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
