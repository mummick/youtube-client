import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchItemComponent } from './search-list/search-item/search-item.component';
// import { HeaderModule } from './header/header.module';
// import { SearchModule } from './search/search.module';
// import { CardListModule } from './card-list/card-list.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FilterComponent, SearchListComponent, SearchItemComponent],
  // imports: [BrowserModule, AppRoutingModule, HeaderModule, SearchModule, CardListModule],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
