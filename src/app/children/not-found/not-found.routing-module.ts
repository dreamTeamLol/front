import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found.page';

const components: any[] = [
    NotFoundPage
];

const routes: Routes = [
    {
        path: '',
        component: NotFoundPage
    },
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: []
})
export class NotFoundRoutingModule {

}