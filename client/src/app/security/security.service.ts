import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMember } from '../shared/models/member';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  baseUrl = environment.apiUrl;
  prisoners: IMember[] = [];

  constructor(private http: HttpClient) { }

  getPrisoners() {
    return this.http.get<IMember[]>(this.baseUrl + 'users');
  }

  getPrisoner(username: string) {
    return this.http.get<IMember>(this.baseUrl + 'users/' + username);
  }
}
