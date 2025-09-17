import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RugbyService {
  private apiUrl = 'https://linkedin-data-api.p.rapidapi.com/get-company-by-domain';

  constructor(private http: HttpClient) {}

  getCompanyByDomain(domain: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': environment.rapidApiKey,   // clé API du fichier environment.ts
      'x-rapidapi-host': environment.rapidApiHost // host du fichier environment.ts
    });

    return this.http.get(`${this.apiUrl}?domain=${domain}`, { headers });
  }
}
