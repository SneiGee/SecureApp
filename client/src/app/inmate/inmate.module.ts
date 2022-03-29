import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmateComponent } from './inmate.component';
import { InmateRoutingModule } from './inmate-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrisonerListComponent } from './prisoner-list/prisoner-list.component';
import { PrisonerDetailComponent } from './prisoner-detail/prisoner-detail.component';



@NgModule({
  declarations: [
    InmateComponent,
    PrisonerListComponent,
    PrisonerDetailComponent
  ],
  imports: [
    CommonModule,
    InmateRoutingModule,
    SharedModule
  ],
  exports: [PrisonerListComponent, PrisonerDetailComponent]
})
export class InmateModule { }
