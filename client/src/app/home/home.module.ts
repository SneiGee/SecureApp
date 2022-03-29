import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AccountModule } from '../account/account.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
