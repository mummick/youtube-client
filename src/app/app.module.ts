import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { HeaderModule } from './header/header.module';
import { SearchModule } from './search/search.module';
import { CardListModule } from './card-list/card-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, SearchModule, CardListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
