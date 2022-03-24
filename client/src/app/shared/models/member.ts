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
    gender: string;p
    status: string
    interests: string;
    city: string;
    nationality: string;
    photos: IPhoto[];
}
