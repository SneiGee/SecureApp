import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { IMember } from 'src/app/shared/models/member';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-detail',
  templateUrl: './security-detail.component.html',
  styleUrls: ['./security-detail.component.css']
})
export class SecurityDetailComponent implements OnInit {
  guard: IMember;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private securityService: SecurityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadGuard();

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
    for (const photo of this.guard.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
      
    }
    return imageUrls;
  }

  loadGuard() {
    this.securityService.getPrisoner(this.route.snapshot.paramMap.get('username'))
      .subscribe(member => {
        this.guard = member;
        this.galleryImages = this.getImages();
      })
  }

}
