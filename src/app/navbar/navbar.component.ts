import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  navShow() {
    this.router.navigate(['/']).then(() => {
      const showElement = document.getElementById('showcase');
      if (showElement) {
        showElement.scrollIntoView({behavior: 'smooth'})
      }
    })
  }

  navCont() {
    this.router.navigate(['/']).then(() => {
      const contElement = document.getElementById('contact');
      if (contElement) {
        contElement.scrollIntoView({behavior: 'smooth'})
      }
    })
  }
}
