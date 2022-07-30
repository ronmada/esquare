import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }
}
