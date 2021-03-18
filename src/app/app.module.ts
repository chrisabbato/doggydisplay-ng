import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DoggosComponent } from './pages/doggos/doggos.component';
import { DisplayImagesComponent } from './components/display-images/display-images.component';
import { DisplayImagesHeaderComponent } from './components/display-images-header/display-images-header.component';
import { SearchInputComponent } from './core/search-input/search-input.component';
import { NavComponent } from './core/nav/nav.component';
import { ErrorComponent } from './core/error/error.component';
import { FullScreenImageComponent } from './components/display-images/full-screen-image/full-screen-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoggosComponent,
    DisplayImagesComponent,
    DisplayImagesHeaderComponent,
    SearchInputComponent,
    NavComponent,
    ErrorComponent,
    FullScreenImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
