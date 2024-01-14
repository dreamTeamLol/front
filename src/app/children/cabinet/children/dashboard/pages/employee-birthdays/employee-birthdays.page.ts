import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonnelApiService } from '../../services/personnel-api.service';
import { SearchService } from '../../../../services/search.service';
import { IEmployee } from '../../interfaces/employee.interface';

@Component({
    templateUrl: './employee-birthdays.page.html',
    styleUrls: ['./styles/employee-birthdays.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeBirthdaysPage {
    public personnelList$: Observable<IEmployee[] | null>;
    public value: Observable<string | null>;

    constructor(
        @Inject(PersonnelApiService) private _personnelApiService: PersonnelApiService,
        @Inject(SearchService) private readonly _currentSearch$: Observable<string | null>,
    ) {
        this.personnelList$ = this._personnelApiService.getPersonnelList();
        this.value = this._currentSearch$
    }
}
