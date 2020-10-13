import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockComponent } from './mock/mock.component';
import { MockService } from './services/mock.service';
import { AdminHeaderComponent } from './components/admin-component/admin-header/admin-header.component';
import { AdminEditComponent } from './components/admin-component/admin-component/admin-edit/admin-edit.component';
import { SignUpComponent } from './components/admin-component/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/admin-component/auth/login/login.component';
import { AdminLandingComponent } from './components/admin-component/admin-landing/admin-landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminNavigationComponent } from './components/admin-component/admin-landing/admin-navigation/admin-navigation.component';
import { BookListComponent } from './components/admin-component/book-list/book-list.component';
import { BookEditComponent } from './components/admin-component/books/book-edit/book-edit.component';
import { BookDetailsComponent } from './components/admin-component/books/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MockComponent,
    AdminHeaderComponent,
    AdminEditComponent,
    SignUpComponent,
    LoginComponent,
    AdminLandingComponent,
    AdminNavigationComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
