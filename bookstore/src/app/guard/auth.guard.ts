import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(UserService);

  return auth.isLogged;
};
