import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from '../../children/account/account.routing-module';
import { CabinetRoutingModule } from '../../children/cabinet/cabinet.routing-module';
import { DestroyService } from "../../services/destroy.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        AccountRoutingModule,
        CabinetRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        DestroyService
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
}
