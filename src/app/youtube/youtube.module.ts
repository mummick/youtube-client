import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { SortByParamsPipe } from './pipes/sort-by-params.pipe';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SharedModule } from '../shared/shared.module';
import { BorderColorByDateDirective } from './directives/border-color-by-date.directive';
import { StatViewComponent } from './components/stat-view/stat-view.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { QueriesInterceptor } from './interceptors/queries.interceptor';
import { CustomItemComponent } from './components/custom-item/custom-item.component';

@NgModule({
  declarations: [
    FilterComponent,
    MainPageComponent,
    SearchListComponent,
    FilterByNamePipe,
    SortByParamsPipe,
    SearchItemComponent,
    BorderColorByDateDirective,
    StatViewComponent,
    DetailedPageComponent,
    CustomItemComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, YoutubeRoutingModule, HttpClientModule],
  exports: [MainPageComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: QueriesInterceptor,
      multi: true,
    },
  ],
})
export class YoutubeModule {}
