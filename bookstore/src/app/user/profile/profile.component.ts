import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Profile } from 'src/app/types/user';
import { Book } from 'src/app/types/books';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: Profile | undefined = undefined;

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

  tailString(num: number) {
    return num == 1 ? 'книга' : 'книги';
  }

  totalPrice(bookList: Book[]) {
    return bookList.reduce((acc, { price }) => (acc += price), 0);
  }
}
