import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sendMessage(event: Event): void {
    event.preventDefault();

  const target = event?.target as HTMLFormElement;
  const name = (target.elements.namedItem("name") as HTMLInputElement).value;
  const email = (target.elements.namedItem("email") as HTMLInputElement).value;
  const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

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
