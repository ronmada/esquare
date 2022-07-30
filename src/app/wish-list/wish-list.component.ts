import { Component } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: 'wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent {
  constructor(private wishlistService: WishlistService) {}
  get wishListBooks(): Array<any> {
    return this.wishlistService.getWishList();
  }
  public removeFromWishList(book: any): void {
    this.wishlistService.removeFromWishList(book);
  }
}
