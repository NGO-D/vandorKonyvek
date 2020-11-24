import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminEditComponent } from './components/admin-component/users/admin-edit/admin-edit.component';
import { AdminHeaderComponent } from './components/admin-component/admin-header/admin-header.component';
import { AdminLandingComponent } from './components/admin-component/admin-landing/admin-landing.component';
import { AdminNavigationComponent } from './components/admin-component/admin-landing/admin-navigation/admin-navigation.component';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './components/admin-component/book-list/book-details/book-details.component';
import { BookListComponent } from './components/admin-component/book-list/book-list.component';
import { BookNewComponent } from './components/admin-component/book-list/book-new/book-new.component';
import { LoginComponent } from './components/admin-component/auth/login/login.component';
import { MockComponent } from './mock/mock.component';
import { SignUpComponent } from './components/admin-component/auth/sign-up/sign-up.component';

import { BooksService } from './components/admin-component/book-list/books.service';
import { MockService } from './services/mock.service';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { AffirmModalComponent } from './components/modals/affirm-modal/affirm-modal.component';

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
    BookDetailsComponent,
    BookNewComponent,
    DeleteModalComponent,
    AffirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
    ],
  providers: [MockService,
              BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
