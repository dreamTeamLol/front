import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { URL } from '../tokens/url.token';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { IEmployeeMutation } from '../interfaces/employee-mutation.interface';
import { ISubstitue } from '../interfaces/substitue.interface';

@Injectable()
export class PersonnelApiService {

    private _personnelList: IUser[] =
        [
            {
                id: 48,
                fullName: "Пупкин Василий Дмитриевич",
                phone: "818231231",
                departmentName: "Тестовое подразделение",
                jobTitle: 'vxdf'
            },
            {
                id: 51,
                fullName: "Котовский Михаил Дмитриевич",
                phone: "65454124342",
                departmentName: "Тестовое подразделение",
                jobTitle: 'gfdgdf'
            },
            {
                id: 56,
                fullName: "Управский Андрей Сергеевич",
                phone: "84532884432",
                departmentName: "Тестовое подразделение",
                jobTitle: 'fds'
            }
    ]

    constructor(
        @Inject(HttpClient) private readonly _http: HttpClient,
        @Inject(URL) private readonly _url: string
    ) {
    }

    /**
     * Получение кадров
     *
     * @returns Observable<IUser[]>
     */
    public getPersonnelList(): Observable<IUser[]> {
        return of(this._personnelList);

        // return this._http.get<IUser[]>(`${this._url}/Birthday`, {
        //     headers: {
        //         'Access-Control-Allow-Origin': this._url
        //     }
        // })
        //     .pipe(
        //         map((users: IUser[]) => users),
        //     );

    }

    /**
     * Получение мутаций
     *
     * @returns Observable<IEmployeeMutation[]>
     */
    public getEmployeeMutationList(): Observable<IEmployeeMutation[]> {
        return this._http.get<IEmployeeMutation[]>(`${this._url}/EmployeeMutation`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .pipe(
                map((employeeMutationList: IEmployeeMutation[]) => employeeMutationList)
            );
    }

    /**
     * Получение замен
     *
     * @returns Observable<ISubstitue[]>
     */
    public getSubstitutionList(): Observable<ISubstitue[]> {
        return this._http.get<ISubstitue[]>(`${this._url}/Substitution`)
            .pipe(
                map((substitutionList: ISubstitue[]) => substitutionList)
            );
    }
}