import { Injectable } from '@angular/core';
import { Mock } from '../mock/mock';
import { VideoItemData } from '../models/video-item-data.model';
import { VideoListData } from '../models/video-list-data.model';

@Injectable({
  providedIn: 'any',
})
export class YoutubeDataExchangeService {
  /* eslint-disable-next-line */
  getVideoItems(query: string): VideoListData {
    // console.log('Query', query);
    const mock = new Mock();
    return mock.videoList;
  }

  getVideoItem(id: string): VideoItemData | undefined {
    const mock = new Mock();
    return mock.videoList.items.find((item) => item.id === id);
  }
}
