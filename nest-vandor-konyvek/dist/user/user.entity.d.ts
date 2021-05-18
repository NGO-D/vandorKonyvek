import { BaseEntity } from "typeorm";
import { Book } from './../books/books.entity';
import { UserRegion } from "./user-region.enum";
import { UserCity } from "./user-city.enum";
export declare class User extends BaseEntity {
    id: number;
    user_firstName: string;
    user_lastName: string;
    user_region: UserRegion;
    user_city: UserCity;
    user_postcode: number;
    user_userName: string;
    user_password: string;
    user_salt: string;
    user_books: Book[];
    validatePassword(password: string): Promise<boolean>;
}
