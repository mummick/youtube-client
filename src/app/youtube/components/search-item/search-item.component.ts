import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoItemData } from '../../models/video-item-data.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() videoItemData: VideoItemData | undefined;

  constructor(private router: Router) {}

  getDetailedInfo() {
    if (this.videoItemData) {
      this.router.navigate(['/youtube/detailed', this.videoItemData.id]);
    }
  }
}
