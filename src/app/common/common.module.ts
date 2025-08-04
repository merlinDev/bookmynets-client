import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonRoutingModule } from './common-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule as NgCommonModule }  from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { DoneDialogComponent } from './components/dialogs/done-dialog/done-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {  MatNativeDateModule } from '@angular/material/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './components/app-component/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ConfirmationDialogComponent,
    DoneDialogComponent,
    SearchBarComponent,
  ],
  imports: [
    NgCommonModule,
    CommonRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [SearchBarComponent]
})
export class CommonModule { }