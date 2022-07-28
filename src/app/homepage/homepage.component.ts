import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    const data = {};
    this.httpRequestsService.getBooks(data).subscribe((res) => {
      console.log(res);
    });
    // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  }
  public clearSearch(): void {
    this.search = '';
    // this.filter();
  }
  public filter() {
    console.log(this.search);
  }
}
