import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';

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
  title = 'angular-app';
}
