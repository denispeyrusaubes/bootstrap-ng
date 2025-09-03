import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaysService {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,cca2';
  private localUrl = '/countries.json'; // ✅ depuis public/

  constructor(private http: HttpClient) {}

  getPays(): Observable<Array<{ name: string; code?: string }>> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(list =>
        (list ?? [])
          .map(p => ({ name: p?.name?.common ?? '—', code: p?.cca2 }))
          .filter(p => p.name !== '—')
          .sort((a, b) => a.name.localeCompare(b.name))
      ),
      catchError(err => {
        console.warn('[PaysService] API KO, fallback local', err?.status);
        return this.http.get<any[]>(this.localUrl).pipe(
          map(list =>
            (list ?? [])
              .map(p => ({ name: p?.name, code: p?.code }))
              .sort((a, b) => a.name.localeCompare(b.name))
          )
        );
      })
    );
  }
}
