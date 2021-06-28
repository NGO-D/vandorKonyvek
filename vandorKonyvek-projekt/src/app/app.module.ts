import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminHeaderComponent } from './components/admin-component/admin-header/admin-header.component';
import { AdminLandingComponent } from './components/admin-component/admin-landing/admin-landing.component';
import { AdminNavigationComponent } from './components/admin-component/admin-landing/admin-navigation/admin-navigation.component';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './components/admin-component/book-list/book-details/book-details.component';
import { BookListComponent } from './components/admin-component/book-list/book-list.component';
import { BookNewComponent } from './components/admin-component/book-list/book-new/book-new.component';

import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { AffirmModalComponent } from './components/modals/affirm-modal/affirm-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from './components/auth/auth module';
import { AdminComponent } from './components/admin/admin.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AuthGuard } from './components/auth/helpers/auth.guard';
import { AuthService } from './components/auth/services/auth.service';
import { TokenStorageService } from './components/auth/services/token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminLandingComponent,
    AdminNavigationComponent,
    BookListComponent,
    BookDetailsComponent,
    BookNewComponent,
    DeleteModalComponent,
    AffirmModalComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AuthModule,
    StorageServiceModule,
    
    ],
  providers: [ AuthGuard,
              AuthService,
              TokenStorageService,
              JwtHelperService,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
