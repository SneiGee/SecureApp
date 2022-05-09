import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMember } from 'src/app/shared/models/member';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-edit',
  templateUrl: './security-edit.component.html',
  styleUrls: ['./security-edit.component.css']
})
export class SecurityEditComponent implements OnInit {
  security: IMember;
  securityForm: FormGroup;
  maxDate: Date;
  submitOptions: string = 'Create';
  loading = false;
  snackBarCreateMessage = 'New guard added successfully'
  snackBarUpdateMessage = 'Data updated successfully'

  constructor(private securityService: SecurityService, private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData: IMember, 
    private dialogRef: MatDialogRef<SecurityEditComponent>, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.security = this.editData;
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);

    this.initializedForm();

    if (this.editData) {
      this.submitOptions = 'Update';
      this.securityForm.controls['firstName'].setValue(this.editData.firstName);
      this.securityForm.controls['lastName'].setValue(this.editData.lastName);
      this.securityForm.controls['username'].setValue(this.editData.username);
      this.securityForm.controls['interests'].setValue(this.editData.interests);
      this.securityForm.controls['gender'].setValue(this.editData.gender);
      this.securityForm.controls['status'].setValue(this.editData.status);
      this.securityForm.controls['city'].setValue(this.editData.city);
      this.securityForm.controls['nationality'].setValue(this.editData.nationality);
      this.securityForm.controls['dateOfBirth'].setValue(this.editData.dateOfBirth);
    }
  }

  initializedForm() {
    this.securityForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      interests: [null, Validators.required],
      gender: [null, Validators.required],
      status: [null, Validators.required],
      city: [null, Validators.required],
      nationality: [null, Validators.required],
      password: ['', [Validators.required, 
        Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value 
        ? null : {isMatching: true}
    }
  }

  submitData() {
    if (!this.editData) {
      if (this.securityForm.valid) {
        this.loading = true;
        this.securityService.createSecurity(this.securityForm.value)
          .subscribe(response => {
            this.securityForm.reset();
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
      this.updateGuard();
    }
  }

  updateGuard() {
    this.loading = true;
    this.securityService.updateGuard(this.editData.id, this.securityForm.value)
      .subscribe(response => {
        this.securityForm.reset();
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

}
