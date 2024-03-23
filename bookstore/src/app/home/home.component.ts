import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Book } from '../types/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] | null = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.homeService.getLastBooks().subscribe({
      next: (books) => (this.books = books),
      error: (err) => console.error(`Error: ${err}`),
    });
  }
}
