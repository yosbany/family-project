import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentTransition, InterpreterService, UsersService } from '../../util-import';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [ComponentTransition()],
  providers: [UsersService]
})
export class SignupComponent implements OnInit {

  constructor(public router: Router, public users: UsersService) { }

  ngOnInit() {
  }

}
