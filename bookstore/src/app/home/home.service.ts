import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../types/books';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService implements OnDestroy {
  private book$$ = new BehaviorSubject<Book | undefined>(undefined);
  public book$ = this.book$$.asObservable();

  book: Book | undefined;

  subscription: Subscription;
  constructor(private http: HttpClient) {
    this.subscription = this.book$.subscribe((book) => {
      this.book = book;
    });
  }

  getLast() {
    const { apiUrl } = environment;
    return this.http
      .get<Book>(`${apiUrl}/books/last/4`)
      .pipe(tap((book) => this.book$$.next(book)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
