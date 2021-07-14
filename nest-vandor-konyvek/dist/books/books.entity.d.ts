import { User } from '../user/user.entity';
import { BaseEntity } from "typeorm";
import { BookAvailable } from "./book-available.enum";
export declare class Book extends BaseEntity {
    bookId: number;
    bookTitle: string;
    bookDescription: string;
    bookImage: string;
    bookAvailable: BookAvailable;
    bookUser: User;
    bookUserId: number;
}
