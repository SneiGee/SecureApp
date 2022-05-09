import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { CellRoutingModule } from './cell-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CellEditComponent } from './cell-edit/cell-edit.component';
import { CellDeleteComponent } from './cell-delete/cell-delete.component';



@NgModule({
  declarations: [
    CellComponent,
    CellEditComponent,
    CellDeleteComponent
  ],
  imports: [
    CommonModule,
    CellRoutingModule,
    SharedModule
  ]
})
export class CellModule { }
