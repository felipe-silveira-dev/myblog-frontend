import Category from "./Category";
import User from "./User";

export default interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
    category: Category;
    user: User;
    // comments: Comment[];
}