import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private router: Router) {}
  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
