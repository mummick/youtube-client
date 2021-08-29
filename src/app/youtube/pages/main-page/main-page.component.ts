import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OptionsService } from 'src/app/core/services/options.service';
import { updateYoutube } from 'src/app/redux/actions/youtube.action';
import { AppState } from 'src/app/redux/state.models';
import { StateVideoList } from 'src/app/shared/models/youtube.models';
import { SortParams } from '../../models/sort-params.model';
import { YoutubeDataExchangeService } from '../../services/youtube-data-exchange.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private paramsSubscription?: Subscription;

  private optionsSubscription?: Subscription;

  public isFilter = false;

  // public videoListData?: VideoListData;

  public stateVideoList$: Observable<StateVideoList> = of([]);

  public filterByName?: string;

  public sortByParams?: SortParams;

  constructor(
    private route: ActivatedRoute,
    private youtubeDataExchange: YoutubeDataExchangeService,
    private optionsService: OptionsService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .pipe(switchMap((params) => this.search(params.query)))
      .subscribe((videoListData) => {
        // this.videoListData = videoListData;
        const stateVideoList: StateVideoList = videoListData.items;
        this.store.dispatch(updateYoutube({ stateVideoList }));
      });
    this.stateVideoList$ = this.store.select((state) => state.youtubeCards);
    this.optionsSubscription = this.optionsService.isFilter$.subscribe((isFilter) => {
      this.toggleFilter(isFilter);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
    this.optionsSubscription?.unsubscribe();
  }

  toggleFilter(isFilter: boolean) {
    this.isFilter = isFilter;
    if (!this.isFilter) {
      this.filterByName = undefined;
      this.sortByParams = undefined;
    }
  }

  private search(query: string) {
    return this.youtubeDataExchange.getVideoItems(query);
  }

  filterByNameChange(filter: string) {
    this.filterByName = filter;
  }

  sortByParamsChange(sortParams: SortParams) {
    this.sortByParams = sortParams;
  }
}
