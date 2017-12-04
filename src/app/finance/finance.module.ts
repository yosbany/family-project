import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './components/main/main.component';
import { IncomeComponent } from './components/income/income.component';
import { OutlayComponent } from './components/outlay/outlay.component';
import { StatisticalPanelsComponent } from './components/statistical-panels/statistical-panels.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  imports: [
    CommonModule,
    FinanceRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [
    MainComponent,
    IncomeComponent,
    OutlayComponent,
    StatisticalPanelsComponent,
    StatsComponent]
})
export class FinanceModule { }
