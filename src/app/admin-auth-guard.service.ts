import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{
  path: import("c:/Users/user/Desktop/ROBERT/SweetPage-Angular7/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot[];
  route: import("c:/Users/user/Desktop/ROBERT/SweetPage-Angular7/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> { 
    return this.auth.appUser$.pipe(
          map(appUser => appUser.isAdmin)   
        )
    }

}
