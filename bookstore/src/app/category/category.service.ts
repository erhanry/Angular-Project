import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../types/category';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<Category[]>('/api/category');
  }
}
