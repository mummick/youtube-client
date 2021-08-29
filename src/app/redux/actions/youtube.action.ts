import { createAction, props } from '@ngrx/store';
import { StateVideoList } from 'src/app/shared/models/youtube.models';

export const updateYoutube = createAction(
  '[Youtube cards list] update cards list',
  props<{ stateVideoList: StateVideoList }>(),
);

export const getYoutubeList = createAction('[Youtube cards list] get cards list');

export const getYoutubeCard = createAction(
  '[Youtube cards list] get card',
  props<{ videoId: string }>(),
);
