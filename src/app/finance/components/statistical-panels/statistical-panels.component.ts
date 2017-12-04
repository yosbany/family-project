import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-statistical-panels',
  templateUrl: './statistical-panels.component.html',
  styleUrls: ['./statistical-panels.component.scss']
})
export class StatisticalPanelsComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;
  @Output() event: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
