import { SortDirection } from './sort-direction.model';
import { SortType } from './sort-type.model';

export interface SortParams {
  type: SortType;
  direction: SortDirection;
}
