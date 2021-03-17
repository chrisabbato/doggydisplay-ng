import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DoggosComponent } from './doggos/doggos.component';
import { DisplayImagesComponent } from './display-images/display-images.component';
import { DisplayImagesHeaderComponent } from './display-images-header/display-images-header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DisplayListComponent } from './display-list/display-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoggosComponent,
    DisplayImagesComponent,
    DisplayImagesHeaderComponent,
    SearchInputComponent,
    DisplayListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
