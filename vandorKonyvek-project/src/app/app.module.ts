import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockComponent } from './mock/mock.component';
import { MockService } from './services/mock.service';

@NgModule({
  declarations: [
    AppComponent,
    MockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
