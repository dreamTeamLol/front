import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { URL } from '../tokens/url.token';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interfaces/employee.interface';
import { IEmployeeMutation } from '../interfaces/employee-mutation.interface';
import { ISubstitue } from '../interfaces/substitue.interface';
import { IMeeting } from '../interfaces/meeting.interface';

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
     * @returns Observable<IEmployee[]>
     */
    public getPersonnelList(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(`${this._url}/Employee`)
            .pipe(
                map((users: IEmployee[]) => users)
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
     * Получение синков
     * 
     * @returns Observable<IMeeting[]>
     */
    public getMeetingList(): Observable<IMeeting[]> {
        return this._http.get<IMeeting[]>(`${this._url}/Meeting`)
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