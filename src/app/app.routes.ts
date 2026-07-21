import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WaqqlyComponent } from './waqqly/waqqly.component';
import { JavaComponent } from './java/java.component';
import { TrackComponent } from './track/track.component';
import { AngularComponent } from './angular/angular.component';
import { PythonComponent } from './python/python.component';
import { ComicTrackerComponent } from './comic-tracker/comic-tracker.component';
import { MStrackerComponent } from './mstracker/mstracker.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'waqqly', component: WaqqlyComponent},
    { path: 'track', component: TrackComponent},
    { path: 'java', component: JavaComponent},
    { path: 'angular', component: AngularComponent },
    { path: 'python', component: PythonComponent },
    { path: "comic", component: ComicTrackerComponent},
    { path: 'Track', component: MStrackerComponent},
    { path: 'projects', component: ProjectsComponent}
    
];
