import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition}from '@angular/animations';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
