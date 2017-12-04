import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-module-panel',
  templateUrl: './module-panel.component.html',
  styleUrls: ['./module-panel.component.scss']
})
export class ModulePanelComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() name: string;
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
