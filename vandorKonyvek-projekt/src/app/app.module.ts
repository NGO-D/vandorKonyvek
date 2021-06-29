import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
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
