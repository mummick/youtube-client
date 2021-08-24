import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { VideoItemData } from '../../models/video-item-data.model';
import { YoutubeDataExchangeService } from '../../services/youtube-data-exchange.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit, OnDestroy {
  private paramsSubscription?: Subscription;

  private searchSubscription?: Subscription;

  private videoItemData$?: Observable<VideoItemData>;

  public videoItemData?: VideoItemData;

  public publishedAt?: Date;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private youtubeDataExchange: YoutubeDataExchangeService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.videoItemData$ = this.search(params.id);
      if (this.videoItemData$) {
        this.searchSubscription?.unsubscribe();
        this.searchSubscription = this.videoItemData$.subscribe((videoItemData) => {
          this.publishedAt = videoItemData.snippet.publishedAt
            ? new Date(videoItemData.snippet.publishedAt)
            : undefined;
          this.videoItemData = videoItemData;
        });
      }
    });
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
  }

  private search(id: string | null) {
    return id ? this.youtubeDataExchange.getVideoItem(id) : undefined;
  }

  goBack() {
    this.location.back();
  }
}
