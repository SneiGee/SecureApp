import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CellService } from '../cell.service';

@Component({
  selector: 'app-cell-delete',
  templateUrl: './cell-delete.component.html',
  styleUrls: ['./cell-delete.component.css']
})
export class CellDeleteComponent implements OnInit {
  loading = false;
  snackBarDeleteMessage = 'Cell deleted successfully';

  constructor(private cellService: CellService, @Inject(MAT_DIALOG_DATA) public deleteData: any, 
    private dialogRef: MatDialogRef<CellDeleteComponent>, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitDeleteCell() {
    this.loading = true;
    this.cellService.deleteCell(this.deleteData.id).subscribe(response => {
      this.dialogRef.close('delete');
      this.snackBar.open(this.snackBarDeleteMessage, '', {
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
