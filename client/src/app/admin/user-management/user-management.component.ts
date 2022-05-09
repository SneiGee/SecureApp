import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IUser } from 'src/app/shared/models/user';
import { AdminService } from '../admin.service';
import { EditRolesComponent } from '../edit-roles/edit-roles.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: Partial<IUser[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['photoUrl', 'username', 'roles', 'action'];
  dataSource: MatTableDataSource<any>;
  
  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  bsModalRef: BsModalRef;

  constructor(private adminService: AdminService,  
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadUsersWithRoles();
  }

  loadUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
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
    // this.dialog.open(EditRolesComponent, {
    //   disableClose: true,
    //   autoFocus: true,
    //   width: '40%'
    // }).afterClosed().subscribe(response => {
    //   if (response === 'create')
    //   {
    //     this.loadUsersWithRoles();
    //   }
    // })
  }

  openRolesModal(user: IUser) {
    const config = {
      // backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered',
      initialState: {
        user,
        roles: this.getRolesArray(user)
      }
    }
    this.bsModalRef = this.modalService.show(EditRolesComponent, config);
    this.bsModalRef.content.updateSelectedRoles.subscribe(values => {
      const rolesToUpdate = {
        roles: [...values.filter(el => el.checked === true).map(el => el.name)]
      };
      if (rolesToUpdate) {
        this.adminService.updateUserRoles(user.username, rolesToUpdate.roles).subscribe(() => {
          user.roles = [...rolesToUpdate.roles]
        })
      }
    })
  }

  deleteDialog(row: any) {
    // this.dialog.open(EditRolesComponent, {
    //   disableClose: true,
    //   autoFocus: true,
    //   width: '40%',
    //   data: row
    // }).afterClosed().subscribe(response => {
    //   if (response === 'delete') this.loadUsersWithRoles();
    // })
  }

  private getRolesArray(user) {
    const roles = [];
    const userRoles = user.roles;
    const availableRoles: any[] = [
      {name: 'Admin', value: 'Admin'},
      {name: 'Moderator', value: 'Moderator'},
      {name: 'Guard', value: 'Guard'}
    ];

    availableRoles.forEach(role => {
      let isMatch = false;
      for (const userRole of userRoles) {
        if (role.name === userRole) {
          isMatch = true;
          role.checked = true;
          roles.push(role);
          break;
        }
      }
      if (!isMatch) {
        role.checked = false;
        roles.push(role);
      }
    })
    return roles;
  }

}
