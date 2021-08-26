import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideoItemData } from '../../models/video-item-data.model';
import { YoutubeDataExchangeService } from '../../services/youtube-data-exchange.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit, OnDestroy {
  private paramsSubscription?: Subscription;

  public videoItemData?: VideoItemData;

  public publishedAt?: Date;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private youtubeDataExchange: YoutubeDataExchangeService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params
      .pipe(switchMap((params) => this.search(params.id)))
      .subscribe((videoItemData) => {
        this.publishedAt = new Date(videoItemData.snippet.publishedAt);
        this.videoItemData = videoItemData;
      });
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
  }

  private search(id: string) {
    return this.youtubeDataExchange.getVideoItem(id);
  }

  goBack() {
    this.location.back();
  }
}
