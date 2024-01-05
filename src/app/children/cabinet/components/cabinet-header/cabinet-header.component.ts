import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { takeUntil, tap } from 'rxjs';
import { DestroyService } from '../../../../services/destroy.service';

@Component({
    selector: 'cabinet-header',
    templateUrl: './cabinet-header.component.html',
    styleUrls: ['./styles/cabinet-header.component.scss'],
    providers: [
        DestroyService
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CabinetHeaderComponent {

    public form: FormGroup;

    constructor(
        @Inject(SearchService) private readonly _searchService: SearchService,
        @Inject(DestroyService) private readonly _destroy$: DestroyService
    ) {
        this.form = new FormGroup({
            'search': new FormControl('')
        })
        this.form.get('search')?.valueChanges
            .pipe(
                tap((value: string | null) => this._searchService.updateSearch(value)),
                takeUntil(this._destroy$)
            )
            .subscribe();
    }
}