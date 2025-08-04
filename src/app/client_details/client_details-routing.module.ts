import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './components/client_details/client_details.component';



const routes: Routes = [
    { path: 'client-details', component:  ClientDetailsComponent},
    
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClientDetailsRoutingModule { }