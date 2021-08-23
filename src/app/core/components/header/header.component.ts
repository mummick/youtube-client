import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public searchInput: string = '';

  constructor(private optionsService: OptionsService, private router: Router) {}

  toggleFilter() {
    this.optionsService.toggleFilter();
  }

  search() {
    this.router.navigate(['/youtube/search', this.searchInput]);
  }
}
