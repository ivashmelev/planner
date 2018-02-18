import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataTimeFormComponent } from './data-time-form/data-time-form.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataTimeFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, DataTimeFormComponent]
})
export class AppModule { }
