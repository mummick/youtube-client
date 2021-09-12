import { createAction, props } from '@ngrx/store';
import { StateCustomCard } from 'src/app/shared/models/custom-card.models';

export const addCustomCard = createAction(
  '[Card input] add card',
  props<{ card: StateCustomCard }>(),
);

export const getCustomList = createAction('[Custom cards list] get cards list');
