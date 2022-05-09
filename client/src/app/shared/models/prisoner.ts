import { IPhoto } from "./photo";

export interface IPrisoner {
    id: number;
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

export interface IPrisonerToCreate {
    firstName: string;
    lastName: string;
    address: string;
    dateOfBirth: Date;
    race: string;
    pictureUrl?: string;
    gender: string;
    status: string;
    height: string;
    weight: string;
    eyeColor: string;
    hairColor: string;
    city: string;
    nationality: string;
    blockId: number;
}

export class PrisonerFormValues implements IPrisonerToCreate {
    // id: number;
    firstName: '';
    lastName: '';
    address: '';
    dateOfBirth: Date;
    race: '';
    gender: '';
    status: '';
    height: '';
    weight: '';
    eyeColor: '';
    hairColor: '';
    city: '';
    nationality: '';
    blockId: number;
  
    constructor(init?: PrisonerFormValues) {
      Object.assign(this, init);
    }
  }