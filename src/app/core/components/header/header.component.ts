import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private querySubscription?: Subscription;

  private query = new Subject<string>();

  private queryOutput$!: Observable<string>;

  constructor(private optionsService: OptionsService, private router: Router) {}

  ngOnInit() {
    this.queryOutput$ = this.query.pipe(
      debounceTime(1000),
      filter((query) => query.length >= 3),
    );
    this.querySubscription = this.queryOutput$.subscribe((query) => this.search(query));
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
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
