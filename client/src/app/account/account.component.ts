import { Component, OnInit } from '@angular/core';
import { IMember } from '../shared/models/member';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  member: IMember;

  constructor() { }

  ngOnInit(): void {
  }

}
