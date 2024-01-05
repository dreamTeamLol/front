import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCabinetPage } from './pages/layout-cabinet/layout-cabinet.page.';
import { cabinetGuard } from './guards/cabinet.guard';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
        RouterModule.forChild(cabinetRoutes),
        HttpClientModule,
    ],
    declarations: [
        LayoutCabinetPage
    ],
    providers: [
        SearchService,
    ]
})
export class CabinetRoutingModule {

}
