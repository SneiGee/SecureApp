import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPrisoner } from '../shared/models/prisoner';

@Injectable({
  providedIn: 'root'
})
export class InmateService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadPrisoners() {
    return this.http.get<IPrisoner[]>(this.baseUrl + 'prisoner');
  }

  loadPisoner(id: number) {
    return this.http.get<IPrisoner>(this.baseUrl + 'prisoner/' + id);
  }
}
