import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Category } from '../types/category';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService implements OnDestroy {
  private categorys$$ = new BehaviorSubject<Category[] | undefined>(undefined);
  private categorys$ = this.categorys$$.asObservable();

  categorys: Category[] | undefined;

  categorySubscription: Subscription;

  constructor(private http: HttpClient) {
    this.categorySubscription = this.categorys$.subscribe((categorys) => {
      this.categorys = categorys;
    });
  }

  getCategory() {
    return this.http
      .get<Category[]>('/api/category')
      .pipe(tap((categorys) => this.categorys$$.next(categorys)));
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }
}
