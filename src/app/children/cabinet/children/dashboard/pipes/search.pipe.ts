import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../interfaces/employee.interface';

@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {

    public transform(data: IEmployee[], value: string | null): IEmployee[] {
        if (!value) {
            return data;
        }

        return data.filter((item: IEmployee) => item.fullName.toLowerCase().includes(value.toLowerCase()));
    }
}