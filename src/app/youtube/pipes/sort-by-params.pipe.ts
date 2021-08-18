import { Pipe, PipeTransform } from '@angular/core';
import { SortDirection } from 'src/app/shared/models/sort-direction.model';
import { SortParams } from 'src/app/shared/models/sort-params.model';
import { SortType } from 'src/app/shared/models/sort-type.model';
import { VideoItemData } from 'src/app/shared/models/video-item-data.model';

@Pipe({
  name: 'sortByParams',
})
export class SortByParamsPipe implements PipeTransform {
  private compare(sortType: SortType, a: VideoItemData, b: VideoItemData): number {
    if (sortType === SortType.views) {
      return +a.statistics.viewCount - +b.statistics.viewCount;
    }
    if (sortType === SortType.date) {
      return Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt);
    }
    return 0;
  }

  transform(videoItems: VideoItemData[], sortParams?: SortParams): VideoItemData[] {
    if (!videoItems || !sortParams) {
      return videoItems;
    }
    const multiplier = sortParams.direction === SortDirection.desc ? -1 : 1;
    const result = Array.from(videoItems);
    return result.sort((a, b) => multiplier * this.compare(sortParams.type, a, b));
  }
}
