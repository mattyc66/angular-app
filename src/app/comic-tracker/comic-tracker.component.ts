import { Component } from '@angular/core';
import { ProjectPageComponent } from '../project-page/project-page.component';

@Component({
  selector: 'app-comic-tracker',
  standalone: true,
  imports: [ProjectPageComponent],
  templateUrl: './comic-tracker.component.html',
  styleUrl: './comic-tracker.component.css'
})
export class ComicTrackerComponent {

}
