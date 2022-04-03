import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { CellRoutingModule } from './cell-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CellComponent
  ],
  imports: [
    CommonModule,
    CellRoutingModule,
    SharedModule
  ]
})
export class CellModule { }
