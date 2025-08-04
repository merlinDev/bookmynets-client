import { NgModule } from '@angular/core';
import { SettingsComponent } from './components/settings/settings.component';

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
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsRoutingModule } from './settings-routing.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    NgCommonModule,
    SettingsRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    CommonModule,CommonModule
  ]
})
export class SettingsModule { }
