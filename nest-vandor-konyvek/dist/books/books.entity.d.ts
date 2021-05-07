import { User } from "src/auth/user.entity";
import { BaseEntity } from "typeorm";
import { BookAvailable } from "./book-available.enum";
export declare class Book extends BaseEntity {
    book_id: number;
    book_title: string;
    book_description: string;
    book_image: string;
    book_available: BookAvailable;
    book_user: User;
    bookUserId: number;
}
