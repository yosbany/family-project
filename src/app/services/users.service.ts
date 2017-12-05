import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class UsersService {


  constructor() {
  }

  authenticate() {
    localStorage.setItem('authenticated', 'true');
  }

  closeSection() {
    localStorage.setItem('authenticated', 'false');
  }

}
