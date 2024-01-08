import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { PersonnelApiService } from '../../services/personnel-api.service';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { SearchService } from '../../../../services/search.service';

@Component({
    templateUrl: './personnel-list.page.html',
    styleUrls: ['./styles/personnel-list.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonnelListPage {

    public personnelList$: Observable<IUser[] | null>;
    public value: Observable<string | null>;

    constructor(
        @Inject(PersonnelApiService) private _personnelApiService: PersonnelApiService,
        @Inject(SearchService) private readonly _currentSearch$: Observable<string | null>,
        ) {
        this.personnelList$ = this._personnelApiService.getPersonnelList();
        this.value = this._currentSearch$
    }
}