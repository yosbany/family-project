import { Component, OnInit } from '@angular/core';
import { ComponentTransition, InterpreterService, UsersService } from '../../../../util-import';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
   providers: [UsersService]
})
export class HeaderComponent implements OnInit {

  constructor(public users: UsersService) { }

  ngOnInit() {
  }

  logOut() {
    this.users.closeSection();
  }

}
