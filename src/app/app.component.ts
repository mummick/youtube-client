import { Component } from '@angular/core';
import { Mock } from './shared/mock';
import { SortParams } from './shared/models/sort-params.model';
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

  public filterByName?: string;

  public sortByParams?: SortParams;

  toggleFilter() {
    this.isFilter = !this.isFilter;
    if (!this.isFilter) {
      this.filterByName = undefined;
      this.sortByParams = undefined;
    }
  }

  search(query: string) {
    const mock = new Mock();
    this.videoListData = query === '' ? undefined : mock.videoList;
  }

  filterByNameChange(filter: string) {
    this.filterByName = filter;
  }

  sortByParamsChange(sortParams: SortParams) {
    this.sortByParams = sortParams;
  }
}
