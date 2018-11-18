import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> { 
    return this.auth.user$.pipe(    
          switchMap(user => this.userService.get(user.uid).valueChanges()),    
          map(appUser => appUser.isAdmin)   
        )
    
    }

}
