import { Component, Input, OnInit } from '@angular/core';
import { IMember } from 'src/app/shared/models/member';

@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.css']
})
export class SecurityListComponent implements OnInit {
  @Input() member: IMember;

  constructor() { }

  ngOnInit(): void {
  }

}
