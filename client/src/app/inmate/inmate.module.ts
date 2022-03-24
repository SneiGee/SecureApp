import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmateComponent } from './inmate.component';
import { InmateRoutingModule } from './inmate-routing.module';



@NgModule({
  declarations: [
    InmateComponent
  ],
  imports: [
    CommonModule,
    InmateRoutingModule
  ]
})
export class InmateModule { }
