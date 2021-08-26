export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
type ThumbnailType = 'default' | 'medium' | 'high' | 'standard' | 'maxres';
export type Thumbnails = Record<ThumbnailType, Thumbnail | undefined>;
export interface Snippet extends Annotation {
  publishedAt: string;
  channelId: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  localized: Annotation;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  defaultAudioLanguage: string;
}
export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface Annotation {
  title: string;
  description: string;
}
export interface VideoItemData {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
export interface SearchId {
  kind: string;
  videoId: string;
}
export interface VideoItemSearchData {
  kind: string;
  etag: string;
  id: SearchId;
  snippet: Snippet;
}
