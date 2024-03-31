import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private apiError$$ = new BehaviorSubject(null);
  public apiError$ = this.apiError$$.asObservable();

  constructor() {}

  setError(message: any): void {
    this.apiError$$.next(message);

    setTimeout(() => {
      this.apiError$$.next(null);
    }, 5000);
  }
}
