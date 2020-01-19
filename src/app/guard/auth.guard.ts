import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { AuthservService } from '../authserv.service';
import { User } from '../model/User-model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( public authService: AuthservService, public router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser: User = this.authService.CurrentUser();
    if (currentUser) {
      if (next.data.roles && next.data.roles.filter(value => -1 !== currentUser.roles.indexOf(value)).length == 0) {
          this.router.navigate(['/404']);
          return false;
      }  
      return true;
  }
  }
  
  
}


