import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { CabinetSidebarComponent } from "../../components/cabinet-sidebar/cabinet-sidebar.component";
import { PersonnelListPage } from "./pages/personnel-list/personnel-list.page";
import { CabinetHeaderComponent } from "../../components/cabinet-header/cabinet-header.component";
import { PersonnelCardComponent } from "./components/personnel-card/personnel-card.component";
import { EmployeeBirthdaysPage } from "./pages/employee-birthdays/employee-birthdays.page";
import { CalendarAdsencePage } from "./pages/calendar-adsence/calendar-adsence.page";
import { CalendarEventPage } from "./pages/calendar-event/calendar-event.page";
import { LayoutDashboardPage } from './pages/layout-dashboard/layout-dashboard.page';
import { PersonnelApiService } from './services/personnel-api.service';
import { URL } from './tokens/url.token';
import { SearchMutationsPipe } from './pipes/search-mutations.pipe';
import { SearchEmployeesPipe } from './pipes/search-employees.pipe';
import { ReactiveFormsModule } from '@angular/forms';

const components: any[] = [
    LayoutDashboardPage,
    CabinetSidebarComponent,
    PersonnelListPage,
    CabinetHeaderComponent,
    PersonnelCardComponent,
    EmployeeBirthdaysPage,
    CalendarAdsencePage,
    CalendarEventPage,
]

const dashboardRoutes: Routes = [
    {
        path: '',
        component: LayoutDashboardPage,
        children: [
            {
                path: '',
                redirectTo: 'personnel-list',
                pathMatch: 'full'
            },
            {
                path: 'personnel-list',
                component: PersonnelListPage,
            },
            {
                path: 'employee-birthdays',
                component: EmployeeBirthdaysPage
            },
            {
                path: 'calendar-absence',
                component: CalendarAdsencePage
            },
            {
                path: 'calendar-events',
                component: CalendarEventPage
            }
        ]
    }
]

@NgModule({
    declarations: [
        components,
        SearchMutationsPipe,
        SearchEmployeesPipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes),
        RouterLinkActive,
        ReactiveFormsModule,
    ],
    providers: [
        PersonnelApiService,
        {
            provide: URL,
            useValue: 'https://directum.snedson.com/api/v1'
        }
    ]
})
export class DashboardRoutingModule {

}
