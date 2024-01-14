import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { PersonnelApiService } from '../../services/personnel-api.service';
import { Observable } from 'rxjs';
import { SearchService } from '../../../../services/search.service';
import { IEmployeeMutation } from '../../interfaces/employee-mutation.interface';

@Component({
    templateUrl: './personnel-list.page.html',
    styleUrls: ['./styles/personnel-list.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonnelListPage {

    public personnelList$: Observable<IEmployeeMutation[] | null>;
    public value: Observable<string | null>;

    constructor(
        @Inject(PersonnelApiService) private _personnelApiService: PersonnelApiService,
        @Inject(SearchService) private readonly _currentSearch$: Observable<string | null>,
        ) {
        this.personnelList$ = this._personnelApiService.getEmployeeMutationList();
        this.value = this._currentSearch$
    }
}
