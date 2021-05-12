import { BaseEntity } from "typeorm";
import { Book } from './../books/books.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    user_books: Book[];
    validatePassword(password: string): Promise<boolean>;
}
