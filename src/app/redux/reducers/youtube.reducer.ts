import { createReducer, on } from '@ngrx/store';
import { StateVideoList } from 'src/app/shared/models/youtube.models';
import { updateYoutube } from '../actions/youtube.action';

const initialState: StateVideoList = [];

export const youtubeReducer = createReducer(
  initialState,
  on(updateYoutube, (state, { stateVideoList }) => [...stateVideoList]),
);
