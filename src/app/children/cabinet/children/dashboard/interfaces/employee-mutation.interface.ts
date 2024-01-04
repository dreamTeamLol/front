import { IUser } from './user.interface';
import { IMutation } from './mutation.interface';

export interface IEmployeeMutation {
    employee: IUser;
    mutation: IMutation;
}