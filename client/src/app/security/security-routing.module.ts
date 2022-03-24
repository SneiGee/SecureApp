import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import { SecurityDetailComponent } from './security-detail/security-detail.component';

export const routes: Routes = [
  {path: '', component: SecurityComponent},
  {path: ':username', component: SecurityDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
