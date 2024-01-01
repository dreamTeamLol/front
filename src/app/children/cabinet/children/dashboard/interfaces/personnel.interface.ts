export interface IPersonnel {
    id: number;
    fullName: string;
    departmentName: string;
    mutations: IMutation[];
}

interface IMutation {
    id: number;
    name: string;
    appliedDate: string;
    note: null;
}