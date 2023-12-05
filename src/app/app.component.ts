import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './children/account/account.routing-module';
import { CabinetRoutingModule } from './children/cabinet/cabinet.routing-module';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        AccountRoutingModule,
        CabinetRoutingModule,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
