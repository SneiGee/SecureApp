import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMember } from '../shared/models/member';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  baseUrl = environment.apiUrl;
  securities: IMember[] = [];

  constructor(private http: HttpClient) { }

  getSecurites() {
    // if (this.securities.length > 0) return of(this.securities);
    return this.http.get<IMember[]>(this.baseUrl + 'users');
  }

  getSecurity(username: string) {
    const security = this.securities.find(x => x.username === username);
    if (security !== undefined) return of(security);
    return this.http.get<IMember>(this.baseUrl + 'users/' + username);
  }

  createSecurity(model: any) {
    return this.http.post(this.baseUrl + 'security/add-guard', model);
  }

  updateGuard(id: number, data: any) {
    return this.http.put(this.baseUrl + 'security/update-guard/' + id, data);
  }
  
  deleteGuard(id: number) {
    return this.http.delete(this.baseUrl + 'security/delete-guard/' + id);
  }
}
