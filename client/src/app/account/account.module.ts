import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountPhotoEditorComponent } from './account-photo-editor/account-photo-editor.component';



@NgModule({
  declarations: [
    AccountEditComponent,
    AccountComponent,
    AccountPhotoEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ],
  exports: []
})
export class AccountModule { }
