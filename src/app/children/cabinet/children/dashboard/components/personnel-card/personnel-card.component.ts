import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IEmployee } from '../../interfaces/employee.interface';

@Component({
    selector: 'cabinet-personnel-card',
    templateUrl: './personnel-card.component.html',
    styleUrls: ['./styles/personnel-card.component.scss', './styles/personne-card-line.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonnelCardComponent {
    @Input()
    public personnel!: IEmployee;

}