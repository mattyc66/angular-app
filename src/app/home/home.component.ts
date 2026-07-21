import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { getDatabase, ref, set } from 'firebase/database';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private router: Router, private route: ActivatedRoute) { }


  //old code REMOVE
  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
  
  sendMessage(event: Event): void {
    event.preventDefault();

  const target = event?.target as HTMLFormElement;
  const name = (<HTMLInputElement>target.elements.namedItem("name")).value;
  const email = (<HTMLInputElement>target.elements.namedItem("email")).value;
  const message = (<HTMLTextAreaElement>target.elements.namedItem("message")).value;

  const db = getDatabase();
  const timestamp = Date.now();
  set(ref(db, 'messages/' + timestamp), {
    name,
    email,
    message
  }).then(() => {
    alert("message sent");
    target.reset();
  }).catch((error) => {
    alert("Failed to send: " + error.message)
  })

  }
}
