import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isRegistered = localStorage.getItem('registrationComplete') === 'true';
  
  if (!isRegistered) {
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};