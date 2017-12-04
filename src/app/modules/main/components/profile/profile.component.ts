import { Component, OnInit } from '@angular/core';
import { ComponentTransition, InterpreterService, UsersService } from '../../../../util-import';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [ComponentTransition()]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
