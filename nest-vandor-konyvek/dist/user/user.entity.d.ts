import { BaseEntity } from "typeorm";
import { Book } from './../books/books.entity';
import { UserRegion } from "./user-region.enum";
export declare class User extends BaseEntity {
    userId: number;
    userFirstName: string;
    userLastName: string;
    userRegion: UserRegion;
    userCity: string;
    userPostcode: number;
    userName: string;
    userIsAdmin: boolean;
    userEmail: string;
    userPassword: string;
    userSalt: string;
    userBooks: Book[];
    validatePassword(password: string): Promise<boolean>;
}
