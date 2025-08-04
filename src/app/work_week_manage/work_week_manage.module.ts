import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { CommonModule as NgCommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { WorkWeekManageComponent } from './components/work-week-manage/work-week-manage.component';
import { WorkWeekManageRoutingModule } from './work_week_manage-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    WorkWeekManageComponent
  ],
  imports: [
    NgCommonModule,
    WorkWeekManageRoutingModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    FormsModule ,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    CommonModule,

  ]
})
export class WorkWeekManageModule { }
