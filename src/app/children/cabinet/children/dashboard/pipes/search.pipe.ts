import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {

    public transform(data: IUser[], value: string | null): IUser[] {
        if (!value) {
            return data;
        }

        return data.filter((item: IUser) => item.fullName.toLowerCase().includes(value?.toLowerCase()));
    }
}