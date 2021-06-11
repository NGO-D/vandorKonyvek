import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: number;
    user_firstName: string;
    user_lastName: string;
    user_region: string;
    user_city: string;
    user_postcode: string;
    user_userName: string;
    user_email: string;
    user_password: string;
    user_salt: string;
    validatePassword(password: string): Promise<boolean>;
}
