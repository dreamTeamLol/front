import { Pipe, PipeTransform } from '@angular/core';
import { IMeeting } from '../interfaces/meeting.interface';

@Pipe({
    name: 'filterEvents'
})
export class SearchEventsPipe implements PipeTransform {

    public transform(data: IMeeting[], value: string | null): IMeeting[] {
        if (!value) {
            return data;
        }

        return data.filter((item: IMeeting) => item.name.toLowerCase().includes(value.toLowerCase()));
    }
}
