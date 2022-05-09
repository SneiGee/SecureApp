import { IPhoto } from "./photo";

export interface IMember {
    id: number;
    idNumber: string
    username: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    age: number;
    created: Date;
    lastActive: Date;
    dateOfBirth: Date;
    interests: string;
    gender: string;
    status: string
    city: string;
    nationality: string;
    photos: IPhoto[];
}
