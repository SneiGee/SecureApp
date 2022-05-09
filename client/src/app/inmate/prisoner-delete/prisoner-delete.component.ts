import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IPrisoner } from 'src/app/shared/models/prisoner';
import { InmateService } from '../inmate.service';

@Component({
  selector: 'app-prisoner-delete',
  templateUrl: './prisoner-delete.component.html',
  styleUrls: ['./prisoner-delete.component.css']
})
export class PrisonerDeleteComponent implements OnInit {
  prisoner: IPrisoner;
  loading = false;
  snackBarMessage = 'Successfully deleted data'

  constructor(private inmateService: InmateService, private route: ActivatedRoute, 
    @Inject(MAT_DIALOG_DATA) public deleteData: any, private dialogRef: MatDialogRef<PrisonerDeleteComponent>, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitDeleteData() {
    this.loading = true;
    this.inmateService.deleteePrisoner(this.deleteData.id).subscribe(response => {
      this.dialogRef.close('delete');
      this.snackBar.open(this.snackBarMessage, '', {
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
