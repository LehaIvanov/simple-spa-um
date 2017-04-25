import { IUser } from "../models";

// tslint:disable-next-line:no-inferrable-types
const apiPrefix: string = "/api/user";

export const getAll: () => Promise<IUser[]> = (): Promise<IUser[]> =>
    fetch(apiPrefix)
        .then((res: Response) => res.json() as Promise<IUser[]>)
        .then((list: IUser[]) => list.map((u: IUser) => ({ ...u, birthDate: new Date(u.birthDate) })));

export const get: (id: number) => Promise<IUser> = (id: number): Promise<IUser> =>
    fetch(`${apiPrefix}/${id}`)
        .then((res: Response) => res.json() as Promise<IUser>)
        .then((user: IUser) => ({ ...user, birthDate: new Date(user.birthDate) }));

export const add: (user: IUser) => Promise<IUser> = (user: IUser): Promise<IUser> => {
    const reqInit: RequestInit = {
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    } as RequestInit;

    return fetch(apiPrefix, reqInit).then((res: Response) => res.json() as Promise<IUser>);
};

export const update: (user: IUser) => Promise<Response> = (user: IUser): Promise<Response> => {
    const reqInit: RequestInit = {
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
    } as RequestInit;

    return fetch(`${apiPrefix}/${user.id}`, reqInit);
};

export const deleteUser: (id: number) => Promise<Response> = (id: number): Promise<Response> => {
    const reqInit: RequestInit = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "DELETE",
    } as RequestInit;

    return fetch(`${apiPrefix}/${id}`, reqInit);
};
