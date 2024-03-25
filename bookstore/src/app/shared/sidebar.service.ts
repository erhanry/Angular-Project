import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private http: HttpClient) {}
  category: Category[] = [];

  getCategory() {
    return this.http.get<Category[]>('/api/category');
  }
}
