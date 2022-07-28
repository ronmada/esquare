import { Component, OnInit } from '@angular/core';
import { APIRes } from '../interfaces';
import { HttpRequestsService } from '../services/http-requests.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public search = '';
  public books: Array<any> = [];
  constructor(private httpRequestsService: HttpRequestsService) {}

  ngOnInit(): void {}
  public clearSearch(): void {
    this.search = '';
    this.filter();
  }
  public filter() {
    if (this.search === '') this.books = [];
    else {
      const search = this.search;
      const data = {
        search,
      };
      console.log(this.search);
      this.httpRequestsService.getBooks(data).subscribe((res: APIRes) => {
        console.log(res);
        this.books = res.items;
      });
    }
  }
}
