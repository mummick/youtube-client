import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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

  private searchSubscription?: Subscription;

  private optionsSubscription?: Subscription;

  public isFilter = false;

  private videoListData$?: Observable<VideoListData>;

  public videoListData?: VideoListData;

  public filterByName?: string;

  public sortByParams?: SortParams;

  constructor(
    private route: ActivatedRoute,
    private youtubeDataExchange: YoutubeDataExchangeService,
    private optionsService: OptionsService,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.videoListData$ = this.search(params.query);
      if (this.videoListData$) {
        this.searchSubscription?.unsubscribe();
        this.searchSubscription = this.videoListData$.subscribe((videoListData) =>
          this.setVideoListData(videoListData),
        );
      }
    });
    this.optionsSubscription = this.optionsService.isFilter$.subscribe((isFilter) => {
      this.toggleFilter(isFilter);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
    this.optionsSubscription?.unsubscribe();
  }

  toggleFilter(isFilter: boolean) {
    this.isFilter = isFilter;
    if (!this.isFilter) {
      this.filterByName = undefined;
      this.sortByParams = undefined;
    }
  }

  setVideoListData(videoListData: VideoListData) {
    this.videoListData = videoListData;
  }

  private search(query: string | null) {
    return query !== null ? this.youtubeDataExchange.getVideoItems(query) : undefined;
  }

  filterByNameChange(filter: string) {
    this.filterByName = filter;
  }

  sortByParamsChange(sortParams: SortParams) {
    this.sortByParams = sortParams;
  }
}
