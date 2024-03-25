import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/books';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css'],
})
export class CurrentBookComponent implements OnInit {
  book = {} as Book;

  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService
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

  get isUpdate() {
    return this.book?.createdAt != this.book?.updatedAt;
  }
  // settt() {
  //   const userDetails$ = this.bookService.getBook('65ff15c83e7e8230b1852127');
  //   const userActivities$ = this.bookService.getCategory();

  //   forkJoin([userDetails$, userActivities$]).subscribe(
  //     ([userDetails, userActivities]) => {
  //       console.log('foforkrm', userDetails, userActivities);
  //     }
  //   );
  // }
}
