import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeedbackManagementComponent } from './feedback-management/feedback-management.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminPanelComponent,
    UserManagementComponent,
    FeedbackManagementComponent,
    EditRolesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
