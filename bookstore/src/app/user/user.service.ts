import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User, UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    return this.http
      .post<UserForAuth>('/api/users/register', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getMe() {
    return this.http
      .get<UserForAuth>('/api/users/me')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http
      .get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .get('/api/users/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
