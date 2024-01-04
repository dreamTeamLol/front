import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IUser } from '../../interfaces/user.interface';

@Component({
    selector: 'cabinet-personnel-card',
    templateUrl: './personnel-card.component.html',
    styleUrls: ['./styles/personnel-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonnelCardComponent {
    @Input()
    public personnel!: IUser;

}