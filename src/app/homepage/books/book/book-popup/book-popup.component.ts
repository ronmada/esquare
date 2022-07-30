import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-book-popup',
  templateUrl: './book-popup.component.html',
  styleUrls: ['./book-popup.component.scss'],
})
export class BookPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private wishlistService: WishlistService
  ) {}
  get book(): any {
    return this.data.book;
  }
  get isBookIdOnWishList(): boolean {
    return this.wishlistService.isBookOnWishList(this.book);
  }
  public addToWishList(book: any): void {
    this.wishlistService.addToWishList(book);
  }
}
