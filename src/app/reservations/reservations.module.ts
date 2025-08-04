import { NgModule } from '@angular/core';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ViewReservationsComponent } from './components/view-reservations/view-reservations.component';
import { MakeAReservationComponent } from './components/make-a-reservation/make-a-reservation.component';
import { CommonModule as NgCommonModule }  from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    ViewReservationsComponent,
    MakeAReservationComponent,
    
  ],
  imports: [
    NgCommonModule,
    ReservationsRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    
  ]
})
export class ReservationsModule { }
