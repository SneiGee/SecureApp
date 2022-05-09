import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { TimeagoModule } from 'ngx-timeago';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TabsModule } from "ngx-bootstrap/tabs";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HasRoleDirective } from './directives/has-role.directive';


@NgModule({
  declarations: [
    TextInputComponent,
    DateInputComponent,
    HasRoleDirective
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(), BsDatepickerModule.forRoot(), ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatTableModule, MatIconModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule,
    MatSnackBarModule,
    TabsModule.forRoot(),
    NgxGalleryModule, FileUploadModule
  ],
  exports: [
    TextInputComponent, DateInputComponent,
    FormsModule, ReactiveFormsModule, BsDropdownModule, BsDatepickerModule, ModalModule,
    MatButtonModule, MatTableModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatPaginatorModule, MatSortModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, TabsModule, 
    MatSnackBarModule,
    NgxGalleryModule, FileUploadModule,
    HasRoleDirective
  ]
})
export class SharedModule { }