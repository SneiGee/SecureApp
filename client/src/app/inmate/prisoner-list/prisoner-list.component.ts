import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { InmateService } from '../inmate.service';

@Component({
  selector: 'app-prisoner-list',
  templateUrl: './prisoner-list.component.html',
  styleUrls: ['./prisoner-list.component.css']
})
export class PrisonerListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['pictureUrl', 'name', 'block', 'age', 'gender', 'created', 'action'];
  dataSource: MatTableDataSource<any>;
  
  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private inmeteService: InmateService) { }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
