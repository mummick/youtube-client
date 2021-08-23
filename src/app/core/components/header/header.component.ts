import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, skipWhile } from 'rxjs/operators';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private query = new Subject<string>();

  private queryOutput$!: Observable<string>;

  constructor(private optionsService: OptionsService, private router: Router) {}

  ngOnInit() {
    this.queryOutput$ = this.query.pipe(
      debounceTime(1000),
      skipWhile((query) => query.length < 3),
    );
    this.queryOutput$.subscribe((query) => this.search(query));
  }

  toggleFilter() {
    this.optionsService.toggleFilter();
  }

  onInputChange(query: string) {
    this.query.next(query);
  }

  search(query: string) {
    this.router.navigate(['/youtube/search', query]);
  }
}
