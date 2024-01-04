import { IUser } from './user.interface';

export interface ISubstitue {
    user: IUser;
    substitue: IUser;
    startDate: string;
    endDate: string;
    comment: string;
}