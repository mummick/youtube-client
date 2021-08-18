import { Pipe, PipeTransform } from '@angular/core';
import { VideoItemData } from 'src/app/shared/models/video-item-data.model';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(videoItems: VideoItemData[], substring?: string): VideoItemData[] {
    if (!videoItems || !substring || substring === '') {
      return videoItems;
    }
    return videoItems.filter((item) =>
      item.snippet.title.toLowerCase().includes(substring.toLowerCase()),
    );
  }
}
