import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/books';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css'],
})
export class CurrentBookComponent implements OnInit {
  book = {} as Book;
  confirmModal: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  private getBook() {
    this.activeRoute.params.subscribe((data) => {
      const id = data['bookId'];

      this.bookService.getBook(id).subscribe((book) => {
        this.book = book;
      });
    });
  }

  get isOwner() {
    return this.book.owner?._id == this.userService.user?._id;
  }

  get isUpdate() {
    return this.book?.createdAt != this.book?.updatedAt;
  }

  editBook() {}

  showModal() {
    this.confirmModal = true;
  }
  closeModal() {
    this.confirmModal = false;
  }

  geleteBook() {
    this.bookService.deleteBook(this.book._id).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
