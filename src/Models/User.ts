export interface IUser {
    id: number;
    email: string;
    name: string | null;
}

export class User implements IUser {
    id: number;
    name: string;
    email: string;

    constructor(user: Partial<User>) {
        this.id = user.id || 0;
        this.name = user.name || '';
        this.email = user.email || '';
    }
}
