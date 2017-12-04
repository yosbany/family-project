import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentTransition, InterpreterService, UsersService } from '../../util-import';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
  animations: [ComponentTransition()]
})
export class ServerErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
