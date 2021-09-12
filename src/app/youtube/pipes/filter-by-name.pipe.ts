import { Pipe, PipeTransform } from '@angular/core';
import { StateVideoList } from 'src/app/shared/models/youtube.models';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(videoItems: StateVideoList, substring?: string): StateVideoList {
    if (!videoItems || !substring || substring === '') {
      return videoItems;
    }
    return videoItems.filter((item) =>
      item.snippet.title.toLowerCase().includes(substring.toLowerCase()),
    );
  }
}
