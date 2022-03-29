import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule, Routes } from '@angular/router';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { PreventUnsavedChangesGuard } from '../core/guards/prevent-unsaved-changes.guard';

export const routes: Routes = [
  {path: 'profile', component: AccountEditComponent, canDeactivate: [PreventUnsavedChangesGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
