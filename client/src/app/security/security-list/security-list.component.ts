import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { IMember } from 'src/app/shared/models/member';
import { SecurityDeleteComponent } from '../security-delete/security-delete.component';
import { SecurityEditComponent } from '../security-edit/security-edit.component';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.css']
})
export class SecurityListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['pictureUrl', 'name', 'status', 'age', 'gender', 'lastActive', 'action'];
  dataSource: MatTableDataSource<any>;
  
  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private securityService: SecurityService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadSecurity();
  }

  loadSecurity() {
    this.securityService.getSecurites().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(SecurityEditComponent, {
      disableClose: true,
      autoFocus: true,
      width: '40%'
    }).afterClosed().subscribe(response => {
      if (response === 'create')
      {
        this.loadSecurity();
      }
    })
  }

  editDialog(row: any) {
    this.dialog.open(SecurityEditComponent, {
      disableClose: true,
      autoFocus: true,
      width: '40%',
      data: row
    }).afterClosed().subscribe(response => {
      if (response === 'update')
      {
        this.loadSecurity();
      }
    })
  }

  deleteDialog(row: any) {
    this.dialog.open(SecurityDeleteComponent, {
      disableClose: true,
      autoFocus: true,
      width: '40%',
      data: row
    }).afterClosed().subscribe(response => {
      if (response === 'delete') this.loadSecurity();
    })
  }

}
