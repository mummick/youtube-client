import { createReducer, on } from '@ngrx/store';
import { StateCustomList } from 'src/app/shared/models/custom-card.models';
import { addCustomCard } from '../actions/custom-card.action';

const initialState: StateCustomList = [];

export const customCardsReducer = createReducer(
  initialState,
  on(addCustomCard, (state, { card }) => [...state, card]),
);
