import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Category } from 'src/app/types/category';
import { Book } from 'src/app/types/books';

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css'],
})
export class CatalogBookComponent implements OnInit {
  books = [] as Book[];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBook().subscribe((books) => {
      this.books = books;
    });
  }
}
