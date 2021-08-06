import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  items: string[] = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.items.push(String(i));
    }
  }
}
