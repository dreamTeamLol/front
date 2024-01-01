import { Injectable } from '@angular/core';
import { IPersonnel } from '../interfaces/personnel.interface';
import { Observable, of } from 'rxjs';

// todo: пока на моковых данных

@Injectable()
export class PersonnelApiService {

    private _personnelList: IPersonnel[] = [
        {
            "id": 48,
            "fullName": "Тестовый Тест",
            "departmentName": "Тестовое подразделение",
            "mutations": []
        },
        {
            "id": 51,
            "fullName": "Котовский Михаил Дмитриевич",
            "departmentName": "Тестовое подразделение",
            "mutations": [
                {
                    "id": 4,
                    "name": "Увольнение",
                    "appliedDate": "2023-11-01T00:00:00+00:00",
                    "note": null
                }
            ]
        },
        {
            "id": 56,
            "fullName": "Управский Андрей Сергеевич",
            "departmentName": "Тестовое подразделение",
            "mutations": []
        }
    ]

    /**
     * Получение кадров
     *
     * @returns Observable<IPersonnel[]>
     */
    public getPersonnelList(): Observable<IPersonnel[]> {
        return of(this._personnelList);
    }
}