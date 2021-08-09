import { Component, Input, OnInit } from '@angular/core';
import { Mock } from '../shared/mock';
import { VideoListData } from '../shared/models/video-list-data.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  @Input() videoListData: VideoListData | undefined;
  constructor() {}

  ngOnInit(): void {
    const mock = new Mock();
    this.videoListData = mock.videoList;
  }
}
