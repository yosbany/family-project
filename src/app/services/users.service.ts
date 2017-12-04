import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

  authenticate() {
    localStorage.setItem('authenticated', 'true');
  }

  closeSection() {
    localStorage.setItem('authenticated', 'false');
  }

}
