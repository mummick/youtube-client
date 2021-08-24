import { Component, Input } from '@angular/core';
import { Statistics } from '../../models/video-item-data.model';

@Component({
  selector: 'app-stat-view',
  templateUrl: './stat-view.component.html',
  styleUrls: ['./stat-view.component.scss'],
})
export class StatViewComponent {
  @Input() statistics?: Statistics;
}
