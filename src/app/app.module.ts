import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    YoutubeModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
