import { createAction, props } from '@ngrx/store';
import { StateVideoList } from 'src/app/shared/models/youtube.models';

export const updateYoutube = createAction(
  '[Youtube effect] update cards list',
  props<{ stateVideoList: StateVideoList }>(),
);

export const updateYoutubeFailed = createAction(
  '[Youtube effect] update cards list failed',
  props<{ error: Error }>(),
);

export const updateQuery = createAction(
  '[Query input] update by query',
  props<{ query: string }>(),
);

export const getYoutubeList = createAction('[Youtube cards list] get cards list');

export const getYoutubeCard = createAction(
  '[Youtube cards list] get card',
  props<{ videoId: string }>(),
);
