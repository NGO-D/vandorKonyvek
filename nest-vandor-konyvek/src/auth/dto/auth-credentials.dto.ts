import { IsString, Matches, MaxLength, MinLength } from "class-validator";
import { UserCity } from "src/user/user-city.enum";
import { UserRegion } from "src/user/user-region.enum";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    user_firstName: string;

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    user_lastName: string;

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    user_region: UserRegion;

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    user_city: UserCity

    @IsString()
    @MinLength(4)
    @MaxLength(4)
    user_postcode: number;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    user_userName: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
        {message: 'weak password'},
        )
    user_password: string;
}
