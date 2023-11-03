import Post from "./Post";

export default interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
    posts: Post[];
}