import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'Naushad Ali',
      email: 'naushadali@gmail.com',
    },
    {
      id: 3,
      name: 'Zaheer Saifi',
      email: 'zaheer@gmail.com',
    },
    {
      id: 4,
      name: 'Azmat Saifi',
      email: 'azmat@gmail.com',
    },
    {
      id: 5,
      name: 'Fiza Saifi',
      email: 'fiza@gmail.com',
    },
  ];
}
