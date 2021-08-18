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

@NgModule({
  declarations: [
    FilterComponent,
    MainPageComponent,
    SearchListComponent,
    FilterByNamePipe,
    SortByParamsPipe,
    SearchItemComponent,
    BorderColorByDateDirective,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [MainPageComponent],
})
export class YoutubeModule {}
