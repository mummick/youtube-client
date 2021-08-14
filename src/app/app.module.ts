import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchItemComponent } from './search-list/search-item/search-item.component';
import { MaterialModule } from './shared/material/material.module';
import { AuthComponent } from './header/auth/auth.component';
import { BorderColorByDateDirective } from './search-list/border-color-by-date.directive';
import { FilterByNamePipe } from './search-list/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SearchListComponent,
    SearchItemComponent,
    AuthComponent,
    BorderColorByDateDirective,
    FilterByNamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
