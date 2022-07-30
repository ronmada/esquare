import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm = this.createForm();
  get userName(): string {
    return this.loginForm.get('userName')?.value as string;
  }
  constructor(private fb: FormBuilder, private router: Router) {}

  public login(): void {
    sessionStorage.setItem('token', this.userName);
    this.router.navigate(['homepage']);
  }
  private createForm(): FormGroup {
    return this.fb.group({
      userName: ['', [Validators.required]],
    });
  }
}
