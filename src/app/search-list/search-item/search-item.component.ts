import { Component, Input, OnInit } from '@angular/core';
import { VideoItemData } from 'src/app/shared/models/video-item-data.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() videoItemData: VideoItemData | undefined;
  public borderColor: string = '';
  constructor() {}

  ngOnInit(): void {
    this.borderColor = this.getBorderColor();
  }

  getBorderColor(): string {
    if (this.videoItemData) {
      const msInDay = 86400000;
      const publicationDate = Date.parse(this.videoItemData.snippet.publishedAt);
      const currentDate = Date.parse(new Date().toISOString());
      const dateDiffDays = (currentDate - publicationDate) / msInDay;
      if (dateDiffDays > 365 / 2) {
        return '#EB5757';
      } else if (dateDiffDays > 30) {
        return '#F2C94C';
      } else if (dateDiffDays > 7) {
        return '#27AE60';
      } else {
        return '#2F80ED';
      }
    }
    return '#4f4f4f';
  }
}
