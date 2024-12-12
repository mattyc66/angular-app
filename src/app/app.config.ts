import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { WaqqlyComponent } from './waqqly/waqqly.component';
import { JavaComponent } from './java/java.component';
import { TrackComponent } from './track/track.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent},
      { path: 'waqqly', component: WaqqlyComponent},
      { path: 'track', component: TrackComponent},
      { path: 'java', component: JavaComponent}
    ]), provideFirebaseApp(() => initializeApp({"projectId":"angular-stuff-a75c9","appId":"1:279219199775:web:5973c3094bbcaaad621a2a","databaseURL":"https://angular-stuff-a75c9-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"angular-stuff-a75c9.firebasestorage.app","apiKey":"AIzaSyASiS8VkVUOgSQsd1edqUgcbhV_ijYUkWY","authDomain":"angular-stuff-a75c9.firebaseapp.com","messagingSenderId":"279219199775","measurementId":"G-L181K5CRZ2"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
