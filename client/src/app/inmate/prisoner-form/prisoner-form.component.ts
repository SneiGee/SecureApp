import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ICell } from 'src/app/shared/models/cell';
import { IPrisoner, IPrisonerToCreate, PrisonerFormValues } from 'src/app/shared/models/prisoner';
import { InmateService } from '../inmate.service';
import { PrisonerEditComponent } from '../prisoner-edit/prisoner-edit.component';

@Component({
  selector: 'app-prisoner-form',
  templateUrl: './prisoner-form.component.html',
  styleUrls: ['./prisoner-form.component.css']
})
export class PrisonerFormComponent implements OnInit {
  @Input() prisoner: PrisonerFormValues;
  @Input() cells: ICell[];
  @Input() prisonerForm: NgForm;''
  maxDate: Date;
  bsConfig: Partial<BsDatepickerConfig>;
  submitOptions: string = 'Create';

  constructor(private inamteService: InmateService, private route: ActivatedRoute, private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<PrisonerEditComponent>) { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
    this.bsConfig = {
      containerClass: 'theme-red',
      dateInputFormat: 'DD-MMMM-YYYY'
    }

    // if (this.editData) {
    //   this.submitOptions = 'Update';

    //   // this.prisoner.controls['lastName'].setValue(this.editData.lastName);
    //   // this.prisoner.controls['address'].setValue(this.editData.address);
    //   // this.prisoner.controls['dateOfBirth'].setValue(this.editData.dateOfBirth);
    //   // this.prisoner.controls['race'].setValue(this.editData.race);
    //   // this.prisoner.controls['gender'].setValue(this.editData.gender);
    //   // this.prisoner.controls['status'].setValue(this.editData.status);
    //   // this.prisoner.controls['height'].setValue(this.editData.height);
    //   // this.prisoner.controls['weight'].setValue(this.editData.weight);
    //   // this.prisoner.controls['eyeColor'].setValue(this.editData.eyeColor);
    //   // this.prisoner.controls['hairColor'].setValue(this.editData.hairColor);
    //   // this.prisoner.controls['city'].setValue(this.editData.city);
    //   // this.prisoner.controls['nationality'].setValue(this.editData.nationality);
    //   // this.prisoner.controls['blockId'].setValue(this.editData.blockId);
    // }
  }

  // onSubmit(prisoner: PrisonerFormValues) {
  //   if (this.editData) {
  //     const updatedProduct = {...this.prisoner, ...prisoner};
  //     this.inamteService.updatePrisoner(updatedProduct, this.editData.id).subscribe((response: any) => {
  //       this.dialogRef.close('update');
  //     });
  //   }
  // }

  addNewPrisoner() {
    // if (this.prisonerForm.valid) {
    //   this.inamteService.createPrisoner(this.prisonerForm.value).subscribe(response => {
    //     console.log(response);
    //     // this.prisonerForm.reset();
    //     this.dialogRef.close();
    //   }, error => {
    //     console.log(error);
    //   })
    // }
  }

  updatePrisonerDatA() {}

}
