import { Component, OnInit } from '@angular/core';
import { IMember } from '../shared/models/member';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  guards: IMember[];

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.securityService.getPrisoners().subscribe(member => {
      this.guards = member;
    })
  }

}
