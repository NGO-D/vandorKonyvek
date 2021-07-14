import { UserRegion } from "src/user/user-region.enum";
import { UserRole } from "src/user/user-role.enum";
export declare class AuthCredentialsDto {
    userFirstName: string;
    userLastName: string;
    userRegion: UserRegion;
    userCity: string;
    userPostcode: number;
    userName: string;
    userRole: UserRole.user;
    userEmail: string;
    userPassword: string;
}
