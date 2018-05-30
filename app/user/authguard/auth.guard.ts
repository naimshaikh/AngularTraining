import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private router:Router,private authenticationService:AuthenticationService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.checkLoggedIn(state.url);
   }
   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('In canActivateChild: ' + state.url);
    return this.checkLoggedIn(state.url);
}

checkLoggedIn(url: string): boolean {
 
  if (!!localStorage.getItem('user')) {
    this.authenticationService.redirectUrl = url;
    return true;
  }
  // Retain the attempted URL for redirection
  this.authenticationService.redirectUrl = url;
  this.router.navigate(['/login']);
    return false;
}
}
