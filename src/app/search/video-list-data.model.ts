import { VideoItemData } from './video-item-data.model';

export interface PageInfo {
  totalResults: string;
  resultsPerPage: string;
}
export interface VideoListData {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: VideoItemData[];
}
