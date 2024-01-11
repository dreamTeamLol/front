import { IEmployee } from './employee.interface';

export interface IEmployeeMutation {
    id?: string;
    employee: IEmployee;
    mutation: string;
    appliedDate: string;
    note: string;
}