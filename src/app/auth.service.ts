import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class AuthService {
user$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }
   login () {
    let returnURL = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnURL);
    
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  };

  logout () {
    this.afAuth.auth.signOut();
  };
}
