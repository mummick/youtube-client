import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { VideoItemData } from '../models/video-item-data.model';
import { VideoListData, VideoListSearchData } from '../models/video-list-data.model';

@Injectable({
  providedIn: 'any',
})
export class YoutubeDataExchangeService {
  private API_KEY = 'AIzaSyA6AujVbrHG9TWO8V6OKcUBpab5A8vv7Cc';

  private MAX_RESULTS = '10';

  private URL_LIST_PRE = `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&type=video&part=snippet&maxResults=${this.MAX_RESULTS}&q=`;

  private URL_LIST_FULL = `https://www.googleapis.com/youtube/v3/videos?key=${this.API_KEY}&part=snippet,statistics&id=`;

  constructor(private http: HttpClient) {}

  /* eslint-disable-next-line */
  getVideoItems(query: string): Observable<VideoListData> {
    return this.http.get<VideoListSearchData>(`${this.URL_LIST_PRE}${query}`).pipe(
      map((result) => result.items.map((item) => item.id.videoId)),
      switchMap((result) =>
        this.http.get<VideoListData>(`${this.URL_LIST_FULL}${result.join(',')}`),
      ),
    );
  }

  getVideoItem(id: string): Observable<VideoItemData> {
    return this.http
      .get<VideoListData>(`${this.URL_LIST_FULL}${id}`)
      .pipe(map((result) => result.items[0]));
  }
}
