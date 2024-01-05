import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable()
export class SearchService extends Observable<string> {

    private _currentSearch: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    constructor() {
        super((observer: Subscriber<string | null>) => this._currentSearch.subscribe(observer));
    }

    public updateSearch(value: string | null): void {
        this._currentSearch.next(value);
    }

}