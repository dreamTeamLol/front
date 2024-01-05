import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountLoginFormBaseComponent } from './account-login-form..base.component';

@Component({
    selector: 'account-login-form',
    templateUrl: './account-login-form.component.html',
    styleUrls: ['./styles/account-login-form.component.scss', './styles/languages.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountLoginFormComponent extends AccountLoginFormBaseComponent {

}