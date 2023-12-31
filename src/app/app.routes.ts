import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./children/account/account.routing-module').then((m: any) => m.AccountRoutingModule)
    },
    {
        path: 'cabinet',
        loadChildren: () => import('./children/cabinet/cabinet.routing-module').then((m: any) => m.CabinetRoutingModule)
    },
    {
        path: '**',
        loadChildren: () => import('./children/not-found/not-found.routing-module').then((m: any) => m.NotFoundRoutingModule)
    }
]
