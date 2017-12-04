import { Component, OnInit } from '@angular/core';
import { ComponentTransition, InterpreterService } from '../../../../util-import';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  animations: [ComponentTransition()]
})
export class ControlPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
