import { UserCity } from "src/user/user-city.enum";
import { UserRegion } from "src/user/user-region.enum";
export declare class AuthCredentialsDto {
    user_firstName: string;
    user_lastName: string;
    user_region: UserRegion;
    user_city: UserCity;
    user_postcode: number;
    user_userName: string;
    user_password: string;
}
