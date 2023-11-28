import {NgModule} from "@angular/core";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {AccountRoutingModule} from "../children/account/account.routing-module";
import {CabinetRoutingModule} from "../children/cabinet/cabinet.routing-module";


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../children/account/account.routing-module').then((m: any) => m.AccountRoutingModule)
    },
    {
        path: 'cabinet',
        loadChildren: () => import('../children/cabinet/cabinet.routing-module').then((m: any) => m.CabinetRoutingModule)
    }
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
        RouterOutlet,
        AccountRoutingModule,
        CabinetRoutingModule,
    ]
})
export class AppRoutingModule {

}
