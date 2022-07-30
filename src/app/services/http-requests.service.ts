import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIRes } from '../interfaces';
const MAX_RESULTS = 20;
const KEY = environment.APIkey;
const URL = 'https://www.googleapis.com/books/v1/volumes';
@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  constructor(private http: HttpClient) {}
  public getBooks(data: any): Observable<APIRes> {
    const q = data.search;
    return this.http.get<APIRes>(URL, {
      params: { q, maxResults: MAX_RESULTS, KEY },
    });
  }
}
