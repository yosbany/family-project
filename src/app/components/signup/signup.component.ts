import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { InterpreterService } from '../../services/interpreter.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()],
  providers: [UsersService]
})
export class SignupComponent implements OnInit {

  constructor(public router: Router, public users: UsersService) { }

  ngOnInit() {
  }

}
