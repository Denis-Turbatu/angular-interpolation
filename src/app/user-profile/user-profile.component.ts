import { Component } from '@angular/core';

import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user: User = {
    name: 'Denis',
    email: 'denis@gmail.com',
    age: 21,
    address: {
      street: '123 Main St',
      city: 'Anytown',
    }
}
}
interface User {
    name: string;
    email: string;
    age: number | null;
    address?: {
      street: string,
      city: string,
    }
};