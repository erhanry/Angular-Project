import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | undefined = undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile().subscribe({
      next: (user) => (this.user = user),
      error: (err) => console.error(`Error: ${err}`),
    });
  }

  counter() {
    return [
      this.user?.createdBooks.length || 0,
      this.user?.createdBooks.length == 1 ? 'книга' : 'книги',
    ];
  }
}
