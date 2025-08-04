import { NgModule } from '@angular/core';
import { PaymentsComponent } from './components/payments/payments.component';
import { CommonModule } from '../common/common.module';
import { CommonModule as NgCommonModule }  from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PaymentsRoutingModule } from './payments-routing.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    NgCommonModule,
    PaymentsRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    CommonModule,
    
  ]
})
export class PaymentsModule { }
