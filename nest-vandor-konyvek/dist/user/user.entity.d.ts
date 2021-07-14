import { BaseEntity } from "typeorm";
import { UserRegion } from "./user-region.enum";
import { UserRole } from "./user-role.enum";
export declare class User extends BaseEntity {
    userId: number;
    userFirstName: string;
    userLastName: string;
    userRegion: UserRegion;
    userCity: string;
    userPostcode: number;
    userName: string;
    userRole: UserRole.user;
    userEmail: string;
    userPassword: string;
    userSalt: string;
    validatePassword(password: string): Promise<boolean>;
}
