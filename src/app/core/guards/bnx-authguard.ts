import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BnxAuthService } from '../services/bnx-auth.service';


@Injectable({
  providedIn: 'root'
})
export class BnxAuthGuard implements CanActivate {

  constructor(private authService: BnxAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/dashboard']); 
      return false;
    }
  }
}
