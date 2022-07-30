import { Component } from '@angular/core';
import { APIRes } from '../interfaces';
import { HttpRequestsService } from '../services/http-requests.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public search = '';
  public books: Array<any> = [];
  get name(): string | null {
    return sessionStorage.getItem('token');
  }
  constructor(private httpRequestsService: HttpRequestsService) {}

  public clearSearch(): void {
    this.search = '';
    this.filter();
  }
  public filter(): void {
    if (this.search === '') this.books = [];
    else {
      const search = this.search;
      const data = {
        search,
      };
      this.httpRequestsService.getBooks(data).subscribe((res: APIRes) => {
        this.books = res.items;
      });
    }
  }
}
