import { Component, Input } from '@angular/core';
import { StateCustomList } from 'src/app/shared/models/custom-card.models';
import { StateVideoList } from 'src/app/shared/models/youtube.models';
import { SortParams } from '../../models/sort-params.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() stateVideoList: StateVideoList | null = null;

  @Input() stateCustomList: StateCustomList | null = [];

  @Input() filterByName?: string;

  @Input() sortByParams?: SortParams;
}
