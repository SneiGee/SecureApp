import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { IPhoto } from 'src/app/shared/models/photo';
import { IPrisoner } from 'src/app/shared/models/prisoner';
import { environment } from 'src/environments/environment';
import { InmateService } from '../inmate.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() prisoner: IPrisoner;
  uploader: FileUploader;
  hasBaseDropzoneOver = false;
  baseUrl = environment.apiUrl;
  loading = false;

  constructor(private inmateService: InmateService) { }

  ngOnInit(): void {
    this.initializeUploader();
  }

  fileOverBase(e: any) {
    this.hasBaseDropzoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'prisoner/add-photo/' + this.prisoner.inmateId,
      // authToken: 'Bearer ' + this.user.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    }

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const photo: IPhoto = JSON.parse(response);
        this.prisoner.prisonPhotos.push(photo);
        if (photo.isMain) {
          // this.user.photoUrl = photo.url;
          this.prisoner.pictureUrl = photo.url;
          // this.accountService.setCurrentUser(this.user);
        }
      }
    }
  }

  deletePhoto(photoId: number) {
    this.inmateService.deletePhoto(photoId, this.prisoner.id).subscribe(() => {
      this.prisoner.prisonPhotos = this.prisoner.prisonPhotos.filter(x => x.id !== photoId);
    })
  }

  setMainPhoto(photo: IPhoto) {
    this.loading = true;
    this.inmateService.setMainPhoto(photo.id, this.prisoner.id).subscribe(() => {
      this.prisoner.pictureUrl = photo.url;
      this.prisoner.prisonPhotos.forEach(p => {
        if (p.isMain) p.isMain = false;
        if (p.id === photo.id) p.isMain = true;
      })
      this.loading = false;
    });
  }
}
