import { Pipe, PipeTransform } from '@angular/core';
import { StateVideoItem, StateVideoList } from 'src/app/shared/models/youtube.models';
import { SortDirection } from '../models/sort-direction.model';
import { SortParams } from '../models/sort-params.model';
import { SortType } from '../models/sort-type.model';

@Pipe({
  name: 'sortByParams',
})
export class SortByParamsPipe implements PipeTransform {
  private compare(sortType: SortType, a: StateVideoItem, b: StateVideoItem): number {
    if (sortType === SortType.views) {
      if (a.statistics && b.statistics) {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      }
      return 0;
    }
    if (sortType === SortType.date) {
      return Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt);
    }
    return 0;
  }

  transform(videoItems: StateVideoList, sortParams?: SortParams): StateVideoList {
    if (!videoItems || !sortParams) {
      return videoItems;
    }
    const multiplier = sortParams.direction === SortDirection.desc ? -1 : 1;
    const result = Array.from(videoItems);
    return result.sort((a, b) => multiplier * this.compare(sortParams.type, a, b));
  }
}
