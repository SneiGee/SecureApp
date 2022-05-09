import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CellService } from '../cell.service';

@Component({
  selector: 'app-cell-edit',
  templateUrl: './cell-edit.component.html',
  styleUrls: ['./cell-edit.component.css']
})
export class CellEditComponent implements OnInit {
  cellForm: FormGroup;
  loading = false;
  submitOptions: string = 'Create'
  snackBarCreateMessage = 'Cell added successfully';
  snackBarUpdateMessage = 'Cell updated successfully';

  constructor(private cellService: CellService, private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<CellEditComponent>, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializedForm();

    if (this.editData) {
      this.submitOptions = 'Update';
      this.cellForm.controls['name'].setValue(this.editData.name);
    }
  }

  initializedForm() {
    this.cellForm = this.formBuilder.group({
      name: [null, Validators.required]
    })
  }

  submitData() {
    if (!this.editData) {
      if (this.cellForm.valid) {
        this.loading = true;
        this.cellService.createCell(this.cellForm.value).subscribe(response => {
          this.cellForm.reset();
          this.dialogRef.close('create');
          this.snackBar.open(this.snackBarCreateMessage, '', {
            duration: 5000
          })
          this.loading = false;
        }, error => {
          console.log(error);
          this.snackBar.open(error.message, '', {
            duration: 6000
          })
          this.loading = false;
        })
      }
    } else {
      this.updateCell();
    }
  }

  updateCell() {
    this.loading = true;
    this.cellService.updateCell(this.editData.id, this.cellForm.value)
      .subscribe(response => {
        this.cellForm.reset();
        this.dialogRef.close('update');
        this.snackBar.open(this.snackBarUpdateMessage, '', {
          duration: 5000
        })
        this.loading = false;
      }, error => {
        console.log(error);
        this.snackBar.open(error.message, '', {
          duration: 6000
        })
        this.loading = false;
      })
  }

}
