import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../types/books';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getLastBooks() {
    return this.http.get<Book[]>('/api/books/last/4');
  }
}
