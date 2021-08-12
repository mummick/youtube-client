import { Component } from '@angular/core';
import { Mock } from './shared/mock';
import { VideoListData } from './shared/models/video-list-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  public title = 'youtube-client';

  public isFilter = false;

  public videoListData?: VideoListData;

  toggleFilter() {
    this.isFilter = !this.isFilter;
  }

  search(query: string) {
    // console.log('Search: ' + query);
    const mock = new Mock();
    this.videoListData = query === '' ? undefined : mock.videoList;
  }
}
