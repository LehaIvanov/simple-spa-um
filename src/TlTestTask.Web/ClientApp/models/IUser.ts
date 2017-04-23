import { Gender } from "./Gender";

export interface IUser {
    birthDate?: Date;
    firstName: string;
    gender: Gender;
    id?: number;
    lastName: string;
}
