import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './homepage/books/books.component';
import { BookComponent } from './homepage/books/book/book.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookPopupComponent } from './homepage/books/book/book-popup/book-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './homepage/layout/layout.component';
import { WishListComponent } from './wish-list/wish-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BooksComponent,
    BookComponent,
    BookPopupComponent,
    LoginComponent,
    LayoutComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
