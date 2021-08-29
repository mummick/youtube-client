import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateVideoItem } from 'src/app/shared/models/youtube.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() stateVideoItem: StateVideoItem | undefined;

  constructor(private router: Router) {}

  getDetailedInfo() {
    if (this.stateVideoItem) {
      this.router.navigate(['/youtube/detailed', this.stateVideoItem.id]);
    }
  }
}
