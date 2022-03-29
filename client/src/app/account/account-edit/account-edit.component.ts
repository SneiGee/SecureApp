import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { IMember } from 'src/app/shared/models/member';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  @ViewChild('updateForm') updateForm: NgForm;
  member: IMember;
  user: IUser;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.updateForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private accountService: AccountService, private toastr: ToastrService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.accountService.getMember(this.user.username).subscribe(member => {
      this.member = member;
    })
  }

  updateProfile() {
    this.accountService.updateProfile(this.member).subscribe(() => {
      this.toastr.success('Your data is update successful');
      this.updateForm.reset(this.member);
    })
  }

}
