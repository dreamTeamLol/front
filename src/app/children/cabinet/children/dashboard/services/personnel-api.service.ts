import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { URL } from '../tokens/url.token';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { IEmployeeMutation } from '../interfaces/employee-mutation.interface';
import { ISubstitue } from '../interfaces/substitue.interface';

@Injectable()
export class PersonnelApiService {

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
        return this._http.get<IUser[]>(`${this._url}/Birthday`)
            .pipe(
                map((users: IUser[]) => users)
            )
    }

    /**
     * Получение мутаций
     *
     * @returns Observable<IEmployeeMutation[]>
     */
    public getEmployeeMutationList(): Observable<IEmployeeMutation[]> {
        return this._http.get<IEmployeeMutation[]>(`${this._url}/EmployeeMutation`)
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