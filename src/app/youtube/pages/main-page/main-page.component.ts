import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mock } from '../../mock/mock';
import { SortParams } from '../../models/sort-params.model';
import { VideoListData } from '../../models/video-list-data.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public isFilter = false;

  public videoListData?: VideoListData;

  public filterByName?: string;

  public sortByParams?: SortParams;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.videoListData = this.search(params.query);
      this.toggleFilter(params.isFilter);
    });
  }

  toggleFilter(isFilter: string) {
    this.isFilter = isFilter === 'true';
    if (!this.isFilter) {
      this.filterByName = undefined;
      this.sortByParams = undefined;
    }
  }

  private search(query: string | null) {
    const mock = new Mock();
    return query ? mock.videoList : undefined;
  }

  filterByNameChange(filter: string) {
    this.filterByName = filter;
  }

  sortByParamsChange(sortParams: SortParams) {
    this.sortByParams = sortParams;
  }
}
