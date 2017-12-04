import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { InterpreterService } from '../../../services/interpreter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}