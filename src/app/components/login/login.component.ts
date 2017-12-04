import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { InterpreterService } from '../../services/interpreter.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, public users: UsersService) {}

  ngOnInit() { }

  authenticate() {
    this.users.authenticate();
  }
}
