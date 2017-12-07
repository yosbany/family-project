import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ComponentTransition, InterpreterService, UsersService } from '../../util-import';
import { User } from '../../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ComponentTransition()],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor(public users: UsersService) {
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit() { }

  authenticate() {
    this.users.signInWithEmailAndPassword();
  }

  onSubmit(loginForm) { }
