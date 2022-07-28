import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookPopupComponent } from './book-popup/book-popup.component';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: any;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  public clickOnBook() {
    this.dialog.open(BookPopupComponent, {
      data: {
        book: this.book,
      },
    });
  }
}
