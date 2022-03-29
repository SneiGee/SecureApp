import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
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


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatTableModule, MatIconModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatSortModule, MatTooltipModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, BsDropdownModule, 
    MatButtonModule, MatTableModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatPaginatorModule, MatSortModule, MatTooltipModule, TabsModule, NgxGalleryModule
  ]
})
export class SharedModule { }