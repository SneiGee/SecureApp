import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPrisoner } from 'src/app/shared/models/prisoner';
import { InmateService } from '../inmate.service';

@Component({
  selector: 'app-prisoner-detail',
  templateUrl: './prisoner-detail.component.html',
  styleUrls: ['./prisoner-detail.component.css']
})
export class PrisonerDetailComponent implements OnInit {
  prisoner: IPrisoner;

  constructor(private inmateService: InmateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPrisoner();
  }

  loadPrisoner() {
    this.inmateService.loadPisoner(+this.route.snapshot.paramMap.get('id'))
      .subscribe(prisoner => {
        this.prisoner = prisoner;
      })
  }

}
