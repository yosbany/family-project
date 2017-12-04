import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { InterpreterService } from '../../../services/interpreter.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  animations: [routerTransition()]
})
export class ControlPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
