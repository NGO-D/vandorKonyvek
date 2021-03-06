import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { UserComponent } from './components/user/user.component';
import { ErrorInterceptor } from './components/auth/helpers/http-error.interceptor';
import { AuthInterceptor } from './components/auth/helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
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
              {
                provide: HTTP_INTERCEPTORS,           
                useClass: ErrorInterceptor,       
                multi: true          
              },  
              {
                provide: HTTP_INTERCEPTORS,           
                useClass: AuthInterceptor,       
                multi: true          
              },       
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
