import 'hammerjs';

import { NgModule } from '@angular/core';

import { enableProdMode } from '@angular/core';
enableProdMode();


import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent, DialogContent } from './demo.component';



@NgModule({
  declarations: [
    AppComponent,
	DemoComponent,DialogContent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
	MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ DemoComponent,DialogContent ],
  bootstrap: [DemoComponent]
})
export class AppModule { 
}


