import { Component, OnInit } from '@angular/core';
import { ComponentTransition, InterpreterService, UsersService, StaticInformationService } from '../../../../util-import';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [ComponentTransition()],
  providers: [StaticInformationService]
})
export class SettingsComponent implements OnInit {

  constructor(private staticInformation: StaticInformationService) { }

  ngOnInit() {
  }

}
