import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { opacityTransitionAnim } from '../../animations/opacityTransitionAnim';
import { Observable } from 'rxjs';
import { PersonnelApiService } from '../../services/personnel-api.service';
import { SearchService } from '../../../../services/search.service';
import { IMeeting } from '../../interfaces/meeting.interface';

@Component({
    templateUrl: './calendar-event.page.html',
    styleUrls: ['./styles/calendar-event.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('opacity', [
            transition(':enter', useAnimation(opacityTransitionAnim, {
                params: {
                    transformStart: '',
                    transformEnd: '',
                    timing: '.5s ease'
                }
            }))
        ])
    ]
})
export class CalendarEventPage {
    public meetingList: Observable<IMeeting[] | null>;
    public value: Observable<string | null>;

    constructor(
        @Inject(PersonnelApiService) private _personnelApiService: PersonnelApiService,
        @Inject(SearchService) private readonly _currentSearch$: Observable<string | null>,
    ) {
        this.meetingList = _personnelApiService.getMeetingList();
        this.value = _currentSearch$;
    }
}
