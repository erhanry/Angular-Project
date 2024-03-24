import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../types/books';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBook(id: string) {
    return this.http.get<Book>(`/api/books/${id}/details`);
  }

  getAllBook() {
    return this.http.get<Book[]>('/api/books');
  }

  getCategoryBook(id: string) {
    return this.http.get<Book[]>(`/api/books/category/${id}`);
  }
}
