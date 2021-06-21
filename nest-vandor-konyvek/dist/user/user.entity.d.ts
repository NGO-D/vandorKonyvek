import { BaseEntity } from "typeorm";
import { UserRegion } from "./user-region.enum";
import { UserRole } from "./user-role.enum";
export declare class User extends BaseEntity {
    user_id: number;
    user_firstName: string;
    user_lastName: string;
    user_region: UserRegion;
    user_city: string;
    user_postcode: number;
    user_userName: string;
    user_role: UserRole.common;
    user_email: string;
    user_password: string;
    user_salt: string;
    validatePassword(password: string): Promise<boolean>;
}
