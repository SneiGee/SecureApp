import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityListComponent } from './security-list/security-list.component';
import { SharedModule } from '../shared/shared.module';
import { SecurityDetailComponent } from './security-detail/security-detail.component';



@NgModule({
  declarations: [
    SecurityComponent,
    SecurityListComponent,
    SecurityDetailComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    SharedModule
  ],
  exports: [SecurityListComponent]
})
export class SecurityModule { }
