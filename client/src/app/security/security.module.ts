import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityListComponent } from './security-list/security-list.component';
import { SharedModule } from '../shared/shared.module';
import { SecurityDetailComponent } from './security-detail/security-detail.component';
import { SecurityEditComponent } from './security-edit/security-edit.component';
import { SecurityDeleteComponent } from './security-delete/security-delete.component';



@NgModule({
  declarations: [
    SecurityComponent,
    SecurityListComponent,
    SecurityDetailComponent,
    SecurityEditComponent,
    SecurityDeleteComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    SharedModule
  ],
  exports: [SecurityListComponent]
})
export class SecurityModule { }
