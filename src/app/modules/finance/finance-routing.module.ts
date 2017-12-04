import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { IncomeComponent } from './components/income/income.component';
import { OutlayComponent } from './components/outlay/outlay.component';



const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'income', component: IncomeComponent },
            { path: 'outlay', component: OutlayComponent }        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinanceRoutingModule {}
