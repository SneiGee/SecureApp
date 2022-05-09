import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmateComponent } from './inmate.component';
import { InmateRoutingModule } from './inmate-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrisonerListComponent } from './prisoner-list/prisoner-list.component';
import { PrisonerDetailComponent } from './prisoner-detail/prisoner-detail.component';
import { PrisonerEditComponent } from './prisoner-edit/prisoner-edit.component';
import { PrisonerFormComponent } from './prisoner-form/prisoner-form.component';
import { PrisonerDeleteComponent } from './prisoner-delete/prisoner-delete.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';



@NgModule({
  declarations: [
    InmateComponent,
    PrisonerListComponent,
    PrisonerDetailComponent,
    PrisonerEditComponent,
    PrisonerFormComponent,
    PrisonerDeleteComponent,
    PhotoEditorComponent
  ],
  imports: [
    CommonModule,
    InmateRoutingModule,
    SharedModule
  ],
  exports: [PrisonerListComponent, PrisonerDetailComponent]
})
export class InmateModule { }
