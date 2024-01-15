import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IMeeting } from '../../interfaces/meeting.interface';

@Component({
    selector: 'cabinet-event',
    templateUrl: './cabinet-event.component.html',
    styleUrls: ['./styles/cabinet-event.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CabinetEventComponent {
    @Input()
    public event!: IMeeting;
}
