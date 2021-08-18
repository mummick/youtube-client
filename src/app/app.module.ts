import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { AuthComponent } from './header/auth/auth.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    YoutubeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
