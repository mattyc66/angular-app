import { Component } from '@angular/core';
import { ProjectPageComponent } from '../project-page/project-page.component';

@Component({
  selector: 'app-mstracker',
  standalone: true,
  imports: [ProjectPageComponent],
  templateUrl: './mstracker.component.html',
  styleUrl: './mstracker.component.css'
})
export class MStrackerComponent {

}
