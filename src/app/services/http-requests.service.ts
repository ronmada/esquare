import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIRes } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  private key = environment.APIkey;
  constructor(private http: HttpClient) {}
  public getBooks(data: any): Observable<APIRes> {
    const q = data.search;
    const key = this.key;
    // const q = 'flowers';
    const url = 'https://www.googleapis.com/books/v1/volumes';
    return this.http.get<APIRes>(url, {
      params: { q, key },
    });
  }
}
