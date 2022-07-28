import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-book-popup',
  templateUrl: './book-popup.component.html',
  styleUrls: ['./book-popup.component.scss'],
})
export class BookPopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private wishlistService: WishlistService
  ) {}
  get book() {
    return this.data.book;
  }
  ngOnInit(): void {
    const ses = JSON.parse(sessionStorage.getItem('wishlistList')!);
  }
  public addToWishList() {
    const itemId = this.book.id;
    // if (sessionStorage.getItem(itemId) === null)
      this.wishlistService.addToWishList(itemId);
  }
}
