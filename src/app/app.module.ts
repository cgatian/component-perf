import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DynamicComponentLoader } from './dynamic-loader.component';
import { AnotherComponent } from './another.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentLoader,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
