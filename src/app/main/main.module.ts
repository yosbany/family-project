import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './components/main/main.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ActiveModulesGuard } from './guards/active-modules.guard';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    ControlPanelComponent,
    SettingsComponent,
    ProfileComponent,
    PageHeaderComponent,
  ],
  providers: [
    ActiveModulesGuard
  ]
})
export class MainModule { }
