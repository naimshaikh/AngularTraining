import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../user/services/authentication.service';
@Injectable()
export class AuthappGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkUserrole(state.url);
  }
  checkUserrole(url: string): boolean {
    if (localStorage.authority == 'ROLE_USER') {
      this.authenticationService.redirectUrl = url;
      return true;
    } else {
      // Retain the attempted URL for redirection
      // this.authenticationService.redirectUrl = url;
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}


