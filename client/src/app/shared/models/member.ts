import { IPhoto } from "./photo";

export interface IMember {
    id: number;
    idNumber: string
    username: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    dateOfBirth: Date;
    gender: string;
    status: string
    interests: string;
    city: string;
    nationality: string;
    photos: IPhoto[];
}
