import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DynamicComponentLoader } from './components/dynamic-loader.component';
import { ComponentBootstrapper } from './components/component-bootstrapper';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentLoader,
    ComponentBootstrapper
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      { path: ':fileName/:moduleName/:componentName', component: ComponentBootstrapper }
    ],
    {
      useHash: true
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
