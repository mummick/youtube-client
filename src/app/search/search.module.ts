import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchItemComponent } from './search-item/search-item.component';

@NgModule({
  declarations: [SearchResultComponent, SearchItemComponent],
  imports: [CommonModule],
})
export class SearchModule {}
