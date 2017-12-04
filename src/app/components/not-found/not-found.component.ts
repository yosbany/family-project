import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentTransition, InterpreterService, UsersService } from '../../util-import';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [ComponentTransition()]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
