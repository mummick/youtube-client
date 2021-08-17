import { VideoItemData } from './video-item-data.model';

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface VideoListData {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: VideoItemData[];
}
