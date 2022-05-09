import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IUser } from 'src/app/shared/models/user';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {
  @Input() updateSelectedRoles = new EventEmitter();
  user: IUser;
  roles: any[];
  loading = false;

  constructor(private adminService: AdminService, 
    private snackBar: MatSnackBar, public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  updateRoles() {
    this.loading = true;
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
    this.loading = false;
  }

}
