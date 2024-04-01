import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/types/books';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  books = [] as Book[];
  searchString: string | undefined;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchString = Object.values(params).join();
      let searchQuery = new HttpParams({ fromObject: params }).toString();
      this.getSearchBook(searchQuery);
    });
  }

  getSearchBook(searchQuery: string) {
    this.bookService.getSearchBook(searchQuery).subscribe((books) => {
      this.books = books;
    });
  }
}
