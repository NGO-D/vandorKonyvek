import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from 'src/app/material.module';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule, 
                  HttpClientModule,
                  ReactiveFormsModule,
                  FormsModule,
                  BrowserAnimationsModule,
                  MyMaterialModule
                ],
  providers:    [ AuthService,
                  TokenStorageService ],
  declarations: [ RegisterComponent,
                  LoginComponent, ],
  exports:      [  ],
  bootstrap:    [  ]
})
export class AuthModule { } 