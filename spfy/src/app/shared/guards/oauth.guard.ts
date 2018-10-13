import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { OauthService } from './../services/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class OauthGuard implements CanActivate {
  constructor(
    private oauthService: OauthService,
    private router: Router
    ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    if (!this.oauthService.isLogged()) {
      this.router.navigate(['/login']);
    }

    return this.oauthService.isLogged();
  }
}
