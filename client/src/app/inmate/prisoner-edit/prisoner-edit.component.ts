import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { forkJoin, Observable } from 'rxjs';
import { ICell } from 'src/app/shared/models/cell';
import { IPrisoner, IPrisonerToCreate, PrisonerFormValues } from 'src/app/shared/models/prisoner';
import { InmateService } from '../inmate.service';

@Component({
  selector: 'app-prisoner-edit',
  templateUrl: './prisoner-edit.component.html',
  styleUrls: ['./prisoner-edit.component.css']
})
export class PrisonerEditComponent implements OnInit {
  prisoner: IPrisoner;
  prisonerFormValues: PrisonerFormValues;
  cells: ICell[];
  cells$: Observable<any[]>;
  prisonerForm: FormGroup;
  maxDate: Date;
  submitOptions: string = 'Create';
  loading = false;
  snackBarCreateMessage = 'Data added successfully'
  snackBarUpdateMessage = 'Data updated successfully'


  constructor(private inmateService: InmateService, private route: ActivatedRoute, 
    private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: IPrisoner, 
    private dialogRef: MatDialogRef<PrisonerEditComponent>, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.prisoner = this.editData;
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);

    this.initializedForm();
    this.loadCells();

    if (this.editData) {
      this.submitOptions = 'Update';
      this.prisonerForm.controls['firstName'].setValue(this.editData.firstName);
      this.prisonerForm.controls['lastName'].setValue(this.editData.lastName);
      this.prisonerForm.controls['address'].setValue(this.editData.address);
      this.prisonerForm.controls['race'].setValue(this.editData.race);
      this.prisonerForm.controls['gender'].setValue(this.editData.gender);
      this.prisonerForm.controls['status'].setValue(this.editData.status);
      this.prisonerForm.controls['height'].setValue(this.editData.height);
      this.prisonerForm.controls['weight'].setValue(this.editData.weight);
      this.prisonerForm.controls['eyeColor'].setValue(this.editData.eyeColor);
      this.prisonerForm.controls['hairColor'].setValue(this.editData.hairColor);
      this.prisonerForm.controls['city'].setValue(this.editData.city);
      this.prisonerForm.controls['nationality'].setValue(this.editData.nationality);
    }
  }

  initializedForm() {
    this.prisonerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      race: [null, Validators.required],
      gender: [null, Validators.required],
      status: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      eyeColor: [null, Validators.required],
      hairColor: [null, Validators.required],
      city: [null, Validators.required],
      nationality: [null, Validators.required],
      blockId: ['', Validators.required],
    })
  }

  // getPrisoner() {
  //   this.inmateService.getPrisoner(this.editData.id)
  //     .subscribe((response: any) => {
  //       const cellId = this.cells && this.cells.find(x => x.name === response.block).id;
  //       this.prisoner = response;
  //       this.prisonerFormValues = {...response, cellId};
  //     })
  // }

  submitData() {
    if (!this.editData) {
      if (this.prisonerForm.valid) {
        this.loading = true;
        this.inmateService.createPrisoner(this.prisonerForm.value).subscribe(response => {
          this.prisonerForm.reset();
          this.dialogRef.close('create');
          this.snackBar.open(this.snackBarCreateMessage, '', {
            duration: 5000
          })
          this.loading = false;
        }, error => {
          this.snackBar.open(error.message, '', {
            duration: 6000
          })
          console.log(error);
          this.loading = false;
        })
      }
    } else {
      this.updatePrisonerData();
    }
  }

  updatePrisonerData() {
    this.loading = true;
    this.inmateService.updatePrisoner(this.editData.id, this.prisonerForm.value)
      .subscribe(response => {
        this.prisonerForm.reset();
        this.dialogRef.close('update');
        this.snackBar.open(this.snackBarUpdateMessage, '', {
          duration: 5000
        })
        this.loading = false;
      }, error => {
        this.snackBar.open(error.message, '', {
          duration: 6000
        })
        console.log(error);
        this.loading = false;
      })
  }

  loadCells() {
    this.inmateService.loadCell().subscribe(response => {
      this.cells = response;
    });
  }
}
