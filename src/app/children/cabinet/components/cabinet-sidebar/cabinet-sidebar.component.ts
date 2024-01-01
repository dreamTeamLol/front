import { ISidebarSettings } from '../../interfaces/sidebar-settings.interface';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { cabinetSidebarSettings } from '../../options/cabinet-sidebar.settings';

@Component({
    selector: 'cabinet-sidebar',
    templateUrl: './cabinet-sidebar.component.html',
    styleUrls: ['./styles/cabinet-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CabinetSidebarComponent {

    public cabinetSidebarSettings: ISidebarSettings[] = cabinetSidebarSettings;
}