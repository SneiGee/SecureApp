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
    return this.http.get<ICell[]>(this.baseUrl + 'admin/cell');
  }

  createCell(cell: ICell) {
    return this.http.post(this.baseUrl + 'admin/create-cell', cell);
  }

  updateCell(id: number, data: any) {
    return this.http.put(this.baseUrl + 'admin/update-cell/' + id, data);
  }

  deleteCell(id: number) {
    return this.http.delete(this.baseUrl + 'admin/delete-cell/' + id);
  }
}
