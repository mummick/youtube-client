import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public filterByName?: string;

  @Output() filterByNameEmit = new EventEmitter<string>();

  onFilterByNameChange() {
    this.filterByNameEmit.emit(this.filterByName);
  }
}
