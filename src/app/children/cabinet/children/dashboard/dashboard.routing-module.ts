import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';

const components: any[] = [
    DashboardPage
]

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardPage,
        children: []
    }
]

@NgModule({
    declarations: [ components ],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    providers: []
})
export class DashboardRoutingModule {

}
