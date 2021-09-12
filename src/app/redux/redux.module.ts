import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { QueriesInterceptor } from '../youtube/interceptors/queries.interceptor';
import { YoutubeEffects } from './effects/youtube.effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, EffectsModule.forFeature([YoutubeEffects])],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: QueriesInterceptor,
      multi: true,
    },
  ],
})
export class ReduxModule {}
