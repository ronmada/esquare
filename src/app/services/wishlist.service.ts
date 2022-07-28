import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {}
  public addToWishList(listOfitemIds: Array<string>): void {
    sessionStorage.setItem('wishlistList', JSON.stringify(listOfitemIds));
  }
}
