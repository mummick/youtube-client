import { Component, Input } from '@angular/core';
import { VideoListData } from '../shared/models/video-list-data.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() videoListData?: VideoListData;
}
