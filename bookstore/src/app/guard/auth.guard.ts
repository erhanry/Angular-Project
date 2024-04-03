import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(UserService);
  const router = inject(Router);

  if (!auth.isLogged) {
    router.navigate(['/home']);
  }
  return auth.isLogged;
};

export const guestGuard: CanActivateFn = (route, state) => {
  const auth = inject(UserService);
  const router = inject(Router);

  if (auth.isLogged) {
    router.navigate(['/home']);
  }
  return !auth.isLogged;
};
