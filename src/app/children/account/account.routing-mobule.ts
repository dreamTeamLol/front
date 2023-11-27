import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutAccountPage } from "./pages/layout-account/layout-account.page";
import { LayoutLoginPage } from "./pages/layout-login/layout-login.page";
import { LayoutRegisterPage } from "./pages/layout-register/layout-register.page";
import { CommonModule } from "@angular/common";


const components: any[] = [
    LayoutAccountPage,
    LayoutLoginPage,
    LayoutRegisterPage,
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
        CommonModule
    ],
    declarations: [ components ],
    providers: []

})
export class AccountRoutingModule {

}