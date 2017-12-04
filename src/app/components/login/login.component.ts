import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ComponentTransition, InterpreterService, UsersService } from '../../util-import';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ComponentTransition()],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, public users: UsersService) {}

  ngOnInit() { }

  authenticate() {
    this.users.authenticate();
  }
}
