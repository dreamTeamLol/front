import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCabinetPage } from './pages/layout-cabinet/layout-cabinet.page.';
import { cabinetGuard } from './guards/cabinet.guard';

const cabinetRoutes: Routes = [
    {
        path: '',
        component: LayoutCabinetPage,
        canActivate: [cabinetGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./children/dashboard/dashboard.routing-module').then((m: any) => m.DashboardRoutingModule)
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(cabinetRoutes)
    ],
    declarations: [
        LayoutCabinetPage
    ],
})
export class CabinetRoutingModule {

}
