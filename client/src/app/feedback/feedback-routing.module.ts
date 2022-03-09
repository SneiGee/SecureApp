import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';

export const routes: Routes = [
  {path: '', component: FeedbackComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
