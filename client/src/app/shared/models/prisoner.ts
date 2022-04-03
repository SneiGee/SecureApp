import { IPhoto } from "./photo";

export interface IPrisoner {
    inmateId: string;
    firstName: string;
    lastName: string;
    address: string;
    pictureUrl: string;
    age: number
    race: string;
    created: Date;
    gender: string;
    status: string;
    height: string;
    weight: string;
    eyeColor: string;
    hairColor: string;
    city: string;
    nationality: string;
    block: string;
    prisonPhotos: IPhoto[];
}