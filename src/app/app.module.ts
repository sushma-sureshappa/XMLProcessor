import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormdataUploadComponent } from './formdata-upload/formdata-upload.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FormdataUploadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
    ,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }