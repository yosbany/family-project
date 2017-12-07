import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithEmailAndPassword() {
    return this._firebaseAuth.auth.signInWithEmailAndPassword('ytejas', '1qazxsw2').catch(function (error) {
      console.log(error);
    });
  }

  authenticate() {
    localStorage.setItem('authenticated', 'true');
  }

  closeSection() {
    localStorage.setItem('authenticated', 'false');
  }

}
