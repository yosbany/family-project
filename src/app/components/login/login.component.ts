import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentTransition, InterpreterService, UsersService, AuthService } from '../../util-import';
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

  constructor(public users: UsersService, public auth: AuthService) {
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit() { }

  authenticate() { }

  onSubmit() {
   // this.auth.emailLogin(this.user.email, this.user.password);
    this.users.authenticate(this.user.email);
   }
}
