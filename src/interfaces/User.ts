export interface IUser {
    id: string|number;
    name: string;
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
  }