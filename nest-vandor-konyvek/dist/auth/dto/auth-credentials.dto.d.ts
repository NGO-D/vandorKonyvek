import { UserRegion } from "src/user/user-region.enum";
export declare class AuthCredentialsDto {
    userFirstName: string;
    userLastName: string;
    userRegion: UserRegion;
    userCity: string;
    userPostcode: number;
    userName: string;
    userIsAdmin: boolean;
    userEmail: string;
    userPassword: string;
}
