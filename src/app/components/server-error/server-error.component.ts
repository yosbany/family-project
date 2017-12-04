import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { InterpreterService } from '../../services/interpreter.service';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
  animations: [routerTransition()]
})
export class ServerErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
