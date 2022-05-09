import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { ICell } from 'src/app/shared/models/cell';
import { IPrisoner, PrisonerFormValues } from 'src/app/shared/models/prisoner';
import { IUser } from 'src/app/shared/models/user';
import { InmateService } from '../inmate.service';
import { PrisonerDeleteComponent } from '../prisoner-delete/prisoner-delete.component';
import { PrisonerEditComponent } from '../prisoner-edit/prisoner-edit.component';

@Component({
  selector: 'app-prisoner-list',
  templateUrl: './prisoner-list.component.html',
  styleUrls: ['./prisoner-list.component.css']
})
export class PrisonerListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  currentUser$: Observable<IUser>;

  displayedColumns: string[] = ['pictureUrl', 'name', 'block', 'age', 'gender', 'created', 'action'];
  dataSource: MatTableDataSource<any>;
  
  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private inmeteService: InmateService, private dialog: MatDialog, private accountService: AccountService) { 
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {
    this.loadPrisoners();
  }

  loadPrisoners() {
    this.inmeteService.loadPrisoners().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  // deletePrisoner(id: number) {
  //   this.inmeteService.deleteePrisoner(id).subscribe(response => {
  //     console.log(response);
  //     alert("You have successful delete data");
  //     this.loadPrisoners();
  //   })
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(PrisonerEditComponent, {
      disableClose: true,
      autoFocus: true,
      width: '40%'
    }).afterClosed().subscribe(response => {
      if (response === 'create')
      {
        this.loadPrisoners();
      }
    })
  }

  editDialog(row: any) {
    this.dialog.open(PrisonerEditComponent, {
      disableClose: true,
      autoFocus: true,
      width: '40%',
      data: row
    }).afterClosed().subscribe(response => {
      if (response === 'update')
      {
        this.loadPrisoners();
      }
    })
  }

  deleteDialog(row: any) {
    this.dialog.open(PrisonerDeleteComponent, {
      disableClose: true,
      autoFocus: true,
      width: '40%',
      data: row
    }).afterClosed().subscribe(response => {
      if (response === 'delete') this.loadPrisoners();
    })
  }

}
