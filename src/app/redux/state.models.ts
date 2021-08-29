import { StateCustomList } from '../shared/models/custom-card.models';
import { StateVideoList } from '../shared/models/youtube.models';

export interface AppState {
  youtubeCards: StateVideoList;
  customCards: StateCustomList;
}
