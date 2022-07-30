import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
const BOOKS_PER_PAGE = 10;
@Component({
  selector: 'app-books-pagination',
  templateUrl: './books-pagination.component.html',
  styleUrls: ['./books-pagination.component.scss'],
})
export class BooksPaginationComponent implements OnInit {
  @Input() booksAmount!: number;
  @Input() page!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  public paginationArray: Array<number> = [];
  get paginationArrayLength(): number {
    return Math.ceil(this.booksAmount / BOOKS_PER_PAGE);
  }
  ngOnInit() {
    this.paginationArray = this.getPaginationArray();
  }
  private getPaginationArray(): Array<number> {
    const paginationArray: Array<number> = [];
    for (let i = 1; i <= this.paginationArrayLength; i++) {
      paginationArray.push(i);
    }
    return paginationArray;
  }
  public selectPage(page: number): void {
    this.selectPageEvent.emit(page);
  }
}
