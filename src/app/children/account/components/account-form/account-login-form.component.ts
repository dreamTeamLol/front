import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'account-login-form',
    templateUrl: './account-login-form.component.html',
    styleUrls: ['./styles/account-login-form.component.scss', './styles/languages.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountLoginFormComponent {

}