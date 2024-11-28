import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { WaqqlyComponent } from './waqqly/waqqly.component';
import { JavaComponent } from './java/java.component';
import { TrackComponent } from './track/track.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent},
      { path: 'waqqly', component: WaqqlyComponent},
      { path: 'track', component: TrackComponent},
      { path: 'java', component: JavaComponent}
    ])]
};
