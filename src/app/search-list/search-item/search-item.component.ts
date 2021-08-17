import { Component, Input } from '@angular/core';
import { VideoItemData } from 'src/app/shared/models/video-item-data.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() videoItemData: VideoItemData | undefined;
}
