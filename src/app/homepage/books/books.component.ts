import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-books',
  templateUrl: 'books.components.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  public page = 1;
  @Input() books!: Array<any>;

  public selectPage(page: number): void {
    this.page = page;
  }
}
