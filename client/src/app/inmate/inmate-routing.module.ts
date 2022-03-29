import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { InmateComponent } from './inmate.component';
import { PrisonerDetailComponent } from './prisoner-detail/prisoner-detail.component';

export const routes: Routes = [
  {path: '', component: InmateComponent},
  {path: ':id', component: PrisonerDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InmateRoutingModule { }
