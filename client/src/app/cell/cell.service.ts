import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICell } from '../shared/models/cell';

@Injectable({
  providedIn: 'root'
})
export class CellService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadPrisonCell() {
    return this.http.get<ICell[]>(this.baseUrl + 'prisoner/cell');
  }
}
