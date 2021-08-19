import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VideoItemData } from '../../models/video-item-data.model';
import { YoutubeDataExchangeService } from '../../services/youtube-data-exchange.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  public videoItemData?: VideoItemData;

  public publishedAt?: Date;

  constructor(
    private route: ActivatedRoute,
    private youtubeDataExchange: YoutubeDataExchangeService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.videoItemData = this.search(params.id);
      this.publishedAt = this.videoItemData?.snippet.publishedAt
        ? new Date(this.videoItemData?.snippet.publishedAt)
        : undefined;
    });
  }

  private search(id: string | null) {
    return id ? this.youtubeDataExchange.getVideoItem(id) : undefined;
  }

  goBack() {
    this.location.back();
  }
}