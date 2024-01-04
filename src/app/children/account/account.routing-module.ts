import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutAccountPage } from "./pages/layout-account/layout-account.page";
import { LayoutLoginPage } from "./pages/layout-login/layout-login.page";
import { LayoutRegisterPage } from "./pages/layout-register/layout-register.page";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AccountLoginFormComponent } from './components/account-form/account-login-form.component';


const components: any[] = [
    LayoutAccountPage,
    LayoutLoginPage,
    LayoutRegisterPage,
    AccountLoginFormComponent,
]

const accountRoutes: Routes = [
    {
        path: '',
        component: LayoutAccountPage,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LayoutLoginPage,
            },
            {
                path: 'register',
                component: LayoutRegisterPage
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(accountRoutes),
        CommonModule,
        NgOptimizedImage
    ],
    declarations: [ components ],
    providers: []

})
export class AccountRoutingModule {

}
