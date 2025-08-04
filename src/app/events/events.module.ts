import { NgModule } from '@angular/core';
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
import { EventsRoutingModule } from './events-routing.module';
import { ViewEventsComponent } from './components/view-events/view-events.component';
import { AddUpdateEventsComponent } from './components/add-update-events/add-update-events.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '../common/common.module';
@NgModule({
  declarations: [
    ViewEventsComponent,
    AddUpdateEventsComponent,
    EventItemComponent,
    
  ],
  imports: [
    NgCommonModule,
    EventsRoutingModule,
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
export class EventsModule { }
