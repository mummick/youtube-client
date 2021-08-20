import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public searchInput: string = '';

  private isFilter = false;

  constructor(private router: Router) {}

  toggleFilter() {
    this.isFilter = !this.isFilter;
    this.sendParams();
  }

  search() {
    this.sendParams();
  }

  private sendParams() {
    this.router.navigate(['/youtube/search', this.searchInput, this.isFilter]);
  }
}
