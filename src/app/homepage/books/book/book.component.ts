import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookPopupComponent } from './book-popup/book-popup.component';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book: any;

  constructor(private dialog: MatDialog) {}

  public clickOnBook(): void {
    this.dialog.open(BookPopupComponent, {
      width: '800px',
      autoFocus: 'dialog',
      data: {
        book: this.book,
      },
    });
  }
}
