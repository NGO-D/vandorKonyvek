import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockComponent } from './mock/mock.component';
import { MockService } from './services/mock.service';
import { AdminListsComponent } from './components/admin-component/admin-lists/admin-lists.component';
import { NavComponent } from './components/admin-component/nav/nav.component';
import { AdminEditComponent } from './components/admin-component/admin-component/admin-edit/admin-edit.component';
import { MaterialModule } from './material.module';
import { SignUpComponent } from './components/admin-component/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/admin-component/auth/login/login.component';
import { AdminLandingComponent } from './components/admin-component/admin-landing/admin-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MockComponent,
    AdminListsComponent,
    NavComponent,
    AdminEditComponent,
    SignUpComponent,
    LoginComponent,
    AdminLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
