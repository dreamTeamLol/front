import { ISidebarSettings } from "../interfaces/sidebar-settings.interface";

export const cabinetSidebarSettings: ISidebarSettings[] = [
    {
        title: 'Кадровые изменения',
        path: 'personnel-list',
        icon: 'personnel-change'
    },
    {
        title: 'Дни рождения',
        path: 'employee-birthdays',
        icon: 'birthdays'
    },
    {
        title: 'События',
        path: 'calendar-events',
        icon: 'calendar-events'
    }
]
