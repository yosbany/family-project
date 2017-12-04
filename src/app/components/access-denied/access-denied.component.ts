import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentTransition, InterpreterService, UsersService } from '../../util-import';


@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss'],
  animations: [ComponentTransition()]
})
export class AccessDeniedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
