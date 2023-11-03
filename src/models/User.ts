import Post from "./Post";

export default interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
    posts?: Post[];
}