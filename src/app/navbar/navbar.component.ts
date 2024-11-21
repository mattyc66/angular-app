import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
  <div class="navbar is-dark"> 
    <div class="navbar-logo">
      <img src="" alt="logo">
    </div>
  </div>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
