import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent],
  template: `
  
  <app-navbar></app-navbar>

  <app-home></app-home>

  <router-outlet></router-outlet> 

  <app-footer></app-footer>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
