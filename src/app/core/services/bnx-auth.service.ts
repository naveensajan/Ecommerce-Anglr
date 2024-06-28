// bnx-auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BnxAuthService {
  IsLogin = false;
  constructor(private router: Router) { }

  login(): void {
    this.IsLogin = true;
  }

  logout(): void {
    // Clear authentication token from localStorage
    localStorage.removeItem('currentUser');

    this.IsLogin = false;
    this.router.navigate(['/bnxdashboard']);
  }

  isAuthenticated(): boolean {
    return this.IsLogin;

  }
}
