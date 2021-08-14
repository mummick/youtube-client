import { Component, EventEmitter, Output } from '@angular/core';
import { SortDirection } from '../shared/models/sort-direction.model';
import { SortParams } from '../shared/models/sort-params.model';
import { SortType } from '../shared/models/sort-type.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public filterByName?: string;

  public sortParams?: SortParams;

  private defaultDirection = SortDirection.desc;

  private changeDirection(sortParams: SortParams): SortParams {
    return {
      type: sortParams.type,
      direction:
        sortParams.direction === SortDirection.asc ? SortDirection.desc : SortDirection.asc,
    };
  }

  @Output() filterByNameEmit = new EventEmitter<string>();

  @Output() sortByParamsEmit = new EventEmitter<SortParams>();

  onFilterByNameChange() {
    this.filterByNameEmit.emit(this.filterByName);
  }

  onSortClick(sortType: 'date' | 'views') {
    if (!this.sortParams || this.sortParams.type !== SortType[sortType]) {
      this.sortParams = {
        type: SortType[sortType],
        direction: this.defaultDirection,
      };
    } else {
      this.sortParams = this.changeDirection(this.sortParams);
    }
    this.sortByParamsEmit.emit(this.sortParams);
  }
}
