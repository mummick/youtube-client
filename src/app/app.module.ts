import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import environment from 'src/environments/environment';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { CoreModule } from './core/core.module';
import { ReduxModule } from './redux/redux.module';
import { youtubeReducer } from './redux/reducers/youtube.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    StoreModule.forRoot(
      { youtubeCards: youtubeReducer },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      },
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: false,
    }),
    ReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
