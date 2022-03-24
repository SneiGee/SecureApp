import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TabsModule } from "ngx-bootstrap/tabs";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, BsDropdownModule, 
    MatButtonModule, TabsModule, NgxGalleryModule
  ]
})
export class SharedModule { }
