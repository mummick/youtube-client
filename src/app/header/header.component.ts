import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public searchInput: string = '';

  @Output() filterButtonClick = new EventEmitter<void>();

  @Output() searchQuery = new EventEmitter<string>();

  toggleFilter() {
    this.filterButtonClick.emit();
  }

  search() {
    this.searchQuery.emit(this.searchInput);
  }
}
