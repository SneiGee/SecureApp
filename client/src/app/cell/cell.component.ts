import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { CellService } from './cell.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @ViewChild(MatPaginator) pagination: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataCellSource: MatTableDataSource<any>;

  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private cellService: CellService) { }

  ngOnInit(): void {
    this.LoadPrisonCell();
  }

  LoadPrisonCell() {
    this.cellService.loadPrisonCell().subscribe(response => {
      this.dataCellSource = new MatTableDataSource(response);
      this.dataCellSource.paginator = this.pagination;
      this.dataCellSource.sort = this.sort;
    })
  }

  applyCellFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataCellSource.filter = filterValue.trim().toLowerCase();

    if (this.dataCellSource.paginator) {
      this.dataCellSource.paginator.firstPage();
    }
  }

}
