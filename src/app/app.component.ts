import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule ,RouterOutlet, NavbarComponent, FooterComponent],
  template: `

  <app-navbar></app-navbar>

  <router-outlet></router-outlet> 

  <app-footer></app-footer>

`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Matthew coppard portfolio';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0,0);
    });
  }

}
