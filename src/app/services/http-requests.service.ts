import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  private key = environment.APIkey;
  constructor(private http: HttpClient) {}
  public getBooks(data: any) {
    const key = this.key;
    const q = 'flowers';
    const url = 'https://www.googleapis.com/books/v1/volumes';
    return this.http.get(url, {
      params: { q, key },
    });
  }
}
