import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { PersonnelApiService } from '../../services/personnel-api.service';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';

@Component({
    templateUrl: './personnel-list.page.html',
    styleUrls: ['./styles/personnel-list.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonnelListPage {

    public personnelList$: Observable<IUser[]>;

    constructor(@Inject(PersonnelApiService) private _personnelApiService: PersonnelApiService) {
        this.personnelList$ = this._personnelApiService.getPersonnelList();
    }
}