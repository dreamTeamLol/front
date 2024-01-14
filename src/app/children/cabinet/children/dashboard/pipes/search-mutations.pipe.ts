import { Pipe, PipeTransform } from '@angular/core';
import { IEmployeeMutation } from '../interfaces/employee-mutation.interface';

@Pipe({
    name: 'filterMutations'
})
export class SearchMutationsPipe implements PipeTransform {

    public transform(data: IEmployeeMutation[], value: string | null): IEmployeeMutation[] {
        if (!value) {
            return data;
        }

        return data.filter((item: IEmployeeMutation) => item.employee.fullName.toLowerCase().includes(value.toLowerCase()));
    }
}
