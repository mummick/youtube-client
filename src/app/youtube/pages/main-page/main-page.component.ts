import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OptionsService } from 'src/app/core/services/options.service';
import { SortParams } from '../../models/sort-params.model';
import { VideoListData } from '../../models/video-list-data.model';
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

  public videoListData?: VideoListData;

  public filterByName?: string;

  public sortByParams?: SortParams;

  constructor(
    private route: ActivatedRoute,
    private youtubeDataExchange: YoutubeDataExchangeService,
    private optionsService: OptionsService,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .pipe(switchMap((params) => this.search(params.query)))
      .subscribe((videoListData) => {
        this.videoListData = videoListData;
      });
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
