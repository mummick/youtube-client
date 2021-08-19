import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [MainPageComponent],
})
export class YoutubeModule {}
