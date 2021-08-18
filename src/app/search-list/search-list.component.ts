import { Component, Input } from '@angular/core';
import { SortParams } from '../shared/models/sort-params.model';
import { VideoListData } from '../shared/models/video-list-data.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() videoListData?: VideoListData;

  @Input() filterByName?: string;

  @Input() sortByParams?: SortParams;
}