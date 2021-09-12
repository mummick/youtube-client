export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

type ThumbnailType = 'default' | 'medium' | 'high' | 'standard' | 'maxres';
export type Thumbnails = Record<ThumbnailType, Thumbnail | undefined>;

export interface Snippet {
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: Thumbnails;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface StateVideoItem {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export type StateVideoList = ReadonlyArray<StateVideoItem>;
