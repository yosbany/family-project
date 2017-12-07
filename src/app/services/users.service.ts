import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class UsersService {

  constructor(private router: Router) {  }

  authenticate(email: string) {
    localStorage.setItem('user-session', email);
  }

  closeSection() {
    localStorage.clear();
  }

}
