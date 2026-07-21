import { Component, Input } from '@angular/core';

interface RepoLink {
  url: string;
  label: string;
}

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})

export class ProjectPageComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() repoLinks!: RepoLink[];
}

