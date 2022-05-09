import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IMember } from 'src/app/shared/models/member';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-delete',
  templateUrl: './security-delete.component.html',
  styleUrls: ['./security-delete.component.css']
})
export class SecurityDeleteComponent implements OnInit {
  member: IMember;
  loading = false;
  snackBarMessage = 'Data deleted successfully'

  constructor(private securityService: SecurityService, private route: ActivatedRoute, 
    @Inject(MAT_DIALOG_DATA) public deleteData: any, private dialogRef: MatDialogRef<SecurityDeleteComponent>, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitDeleteData() {
    this.loading = true;
    this.securityService.deleteGuard(this.deleteData.id).subscribe(response => {
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
