import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user: User = {
    name: '',
    email: '',
    age: null,
    address: {
      street: '',
      city: '',
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