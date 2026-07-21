import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { ProjectPageComponent } from '../project-page/project-page.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CardComponent, ProjectPageComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
