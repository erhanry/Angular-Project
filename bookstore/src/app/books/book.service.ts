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

  getSearchBook(searchQuery: string) {
    return this.http.get<Book[]>(`/api/books/search?${searchQuery}`);
  }

  getCategoryBook(id: string) {
    return this.http.get<Book[]>(`/api/books/category/${id}`);
  }

  createBook(newBook: Book) {
    return this.http.post<Book>('/api/books', { ...newBook });
  }

  editBook(id: string, newBook: Book) {
    return this.http.put<Book>(`/api/books/${id}`, { ...newBook });
  }

  deleteBook(id: string) {
    return this.http.delete<Book>(`/api/books/${id}`);
  }
}
