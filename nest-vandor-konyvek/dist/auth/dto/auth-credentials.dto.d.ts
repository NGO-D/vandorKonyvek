import { UserRegion } from "src/user/user-region.enum";
import { UserRole } from "src/user/user-role.enum";
export declare class AuthCredentialsDto {
    user_firstName: string;
    user_lastName: string;
    user_region: UserRegion;
    user_city: string;
    user_postcode: number;
    user_userName: string;
    user_role: UserRole.common;
    user_email: string;
    user_password: string;
}
