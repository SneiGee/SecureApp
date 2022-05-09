import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { IPrisoner } from 'src/app/shared/models/prisoner';
import { InmateService } from '../inmate.service';

@Component({
  selector: 'app-prisoner-detail',
  templateUrl: './prisoner-detail.component.html',
  styleUrls: ['./prisoner-detail.component.css']
})
export class PrisonerDetailComponent implements OnInit {
  prisoner: IPrisoner;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private inmateService: InmateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPrisoner();

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.prisoner.prisonPhotos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
      
    }
    return imageUrls;
  }

  loadPrisoner() {
    this.inmateService.getPrisoner(this.route.snapshot.paramMap.get('inmateid'))
      .subscribe(prisoner => {
        this.prisoner = prisoner;
        this.galleryImages = this.getImages();
      })
  }

}
