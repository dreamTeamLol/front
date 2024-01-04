import { Component, ChangeDetectionStrategy, inject, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './layout-login.page.html',
    styleUrls: ['./styles/layout-login.page.scss', './styles/languages.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutLoginPage {
    public get languages(): string[] {
        return this._languages;
    }

    public isChoosingLanguage: boolean = false;
    public currentLanguage: string = '';

    private _languages: string[] = [
        'English (United States)',
        'English (United Kingdom)',
        'Русский (Россия)'
    ]
    private _router: Router = inject(Router);

    @HostListener('click', ['$event'])
    onClick(event: Event): void {
        const target: Element = event.target as Element;
        if (!target?.className.includes('languages')) {
            this.isChoosingLanguage = false;
        }
    }

    constructor() {
        this.currentLanguage = this._languages[2];
    }

    public login(): void {
        this._router.navigate(['/cabinet'])
    }

    public changeLanguage(newLanguage: string): void {
        this.currentLanguage = newLanguage;
        this.isChoosingLanguage = false;
    }
}
