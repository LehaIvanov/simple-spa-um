// tslint:disable-next-line:no-inferrable-types
export const CALL_API: string = "Call API";

export const getUsers: () => Promise<Response> = (): Promise<Response> => fetch("").then((r: Response) => r.json());
