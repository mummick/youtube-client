import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { YoutubeDataExchangeService } from 'src/app/youtube/services/youtube-data-exchange.service';
import { updateQuery, updateYoutube, updateYoutubeFailed } from '../actions/youtube.action';

@Injectable({ providedIn: 'any' })
export class YoutubeEffects {
  constructor(private actions: Actions, private youtubeService: YoutubeDataExchangeService) {}

  getYoutubeList: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(updateQuery),
      switchMap((updateQueryAction) =>
        this.youtubeService.getStateVideoList(updateQueryAction.query).pipe(
          map((stateVideoList) => updateYoutube({ stateVideoList })),
          catchError((error) => of(updateYoutubeFailed({ error }))),
        ),
      ),
    ),
  );
}
