import { IUser } from "../models";

export const getAll: () => Promise<IUser[]> = (): Promise<IUser[]> =>
    // tslint:disable-next-line:no-any
    fetch("/api/user").then((res: Response) => res.json()).then((arr: any) => arr.map((item: IUser) => item));

/*
export const getAll: () => Promise<IUser[]> = (): Promise<IUser[]> => Promise.resolve([{
    firstName: "Emma",
    gender: 0,
    id: 1,
    lastName: "Stone",
} as IUser]);
*/
