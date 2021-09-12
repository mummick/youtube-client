import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateCustomCard } from 'src/app/shared/models/custom-card.models';

@Component({
  selector: 'app-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
})
export class CustomItemComponent {
  @Input() stateCustomItem: StateCustomCard | undefined;

  constructor(private router: Router) {}

  watch() {
    if (this.stateCustomItem) {
      window.open(this.stateCustomItem.videoURL, '_blank');
    }
  }
}
