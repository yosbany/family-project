import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ActiveModulesGuard } from './guards/active-modules.guard';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ControlPanelComponent },
            {
                path: 'finance',
                loadChildren: '../finance/finance.module#FinanceModule',
                canActivate: [ActiveModulesGuard]
            },
            { path: 'settings', component: SettingsComponent },
            { path: 'profile', component: ProfileComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
