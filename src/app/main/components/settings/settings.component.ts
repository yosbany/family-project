import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { InterpreterService } from '../../../services/interpreter.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [routerTransition()]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
