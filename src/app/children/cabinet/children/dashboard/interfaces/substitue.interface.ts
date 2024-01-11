import { IEmployee } from './employee.interface';

export interface ISubstitue {
    id?: number;
    employee: IEmployee;
    substitue: ISubstitue;
    startDate: string;
    endDate: string;
    comment: string;
}

export interface ISubstitue extends IEmployee {

}