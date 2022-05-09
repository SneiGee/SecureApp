import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICell } from '../shared/models/cell';
import { IPrisoner, IPrisonerToCreate, PrisonerFormValues } from '../shared/models/prisoner';

@Injectable({
  providedIn: 'root'
})
export class InmateService {
  baseUrl = environment.apiUrl;
  prisoners: IPrisoner[] = [];
  cells: ICell[] = [];

  constructor(private http: HttpClient) { }

  loadPrisoners() {
    return this.http.get<IPrisoner[]>(this.baseUrl + 'prisoner');
  }

  getPrisoner(inmateid: string) {
    const prisoner = this.prisoners.find(x => x.inmateId === inmateid);
    if (prisoner !== undefined) return of(prisoner);
    return this.http.get<IPrisoner>(this.baseUrl + 'prisoner/' + inmateid);
  }

  loadCell() {
    if (this.cells.length > 0) return of(this.cells);
    return this.http.get<ICell[]>(this.baseUrl + 'prisoner/cell').pipe(
      map(response => {
        this.cells = response;
        return response;
      })
    )
  }

  createPrisoner(prisoner: IPrisoner) {
    return this.http.post(this.baseUrl + 'prisoner/add-prisoner', prisoner);
  }

  updatePrisoner(id: number, data: any) {
    return this.http.put(this.baseUrl + 'prisoner/update-prisoner/' + id, data);
  }
  
  deleteePrisoner(id: number) {
    return this.http.delete(this.baseUrl + 'prisoner/delete-prisoner/' + id);
  }

  deletePhoto(photoId: number, prisonerId: number) {
    return this.http.delete(this.baseUrl + 'prisoner/' + prisonerId + '/delete-photo/' + photoId);
  }

  setMainPhoto(photoId: number, prisonerId: number) {
    return this.http.put(this.baseUrl + 'prisoner/' + prisonerId + '/set-main-photo/' + photoId, {});
  }
}
