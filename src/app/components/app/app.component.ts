import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from '../../children/account/account.routing-module';
import { CabinetRoutingModule } from '../../children/cabinet/cabinet.routing-module';
import { DestroyService } from "../../services/destroy.service";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        AccountRoutingModule,
        CabinetRoutingModule,
    ],
    providers: [
        DestroyService
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
}
