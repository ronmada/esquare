import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public addToWishList(book: any): void {
    const wishList: Array<any> = this.getWishList() || [];
    wishList.push(book);
    sessionStorage.setItem('wishlistList', JSON.stringify(wishList));
  }
  public getWishList(): Array<any> {
    return JSON.parse(sessionStorage.getItem('wishlistList')!) || [];
  }

  public isBookOnWishList(book: any): boolean {
    const wishlistList = this.getWishList();
    return wishlistList.some((item) => item.id === book.id);
  }
  public removeFromWishList(book: any): void {
    const wishlistList = this.getWishList();
    const index = wishlistList.findIndex((item) => item.id === book.id);
    wishlistList.splice(index, 1);
    this.setNewWishList(wishlistList);
  }
  private setNewWishList(wishlistList: Array<any>): void {
    sessionStorage.setItem('wishlistList', JSON.stringify(wishlistList));
  }
}
