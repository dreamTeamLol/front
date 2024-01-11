import { IEmployee } from './employee.interface';

export interface IMeeting {
    id?: number;
    name: string;
    displayName: string;
    dateTime: string;
    durationInHours: number;
    location: string;
    secretary: ISecretary;
    president: IPresident;
    members: IMember[];
    note: string;
}

export interface ISecretary extends IEmployee {

}

export interface IPresident extends IEmployee {

}

export interface IMember extends IEmployee {

}

