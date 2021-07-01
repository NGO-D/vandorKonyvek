import { IsEmail, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { UserRegion } from "src/user/user-region.enum";
import { UserRole } from "src/user/user-role.enum";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    user_firstName: string;

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    user_lastName: string;

    user_region: UserRegion;

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    user_city: string

    @IsNumber()
    @MinLength(4)
    @MaxLength(4)
    user_postcode: number;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    user_userName: string;

    user_role: UserRole.common;

    @IsString()
    @IsEmail()
    @MinLength(4)
    @MaxLength(20)
    user_email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
        {message: 'weak password'},
        )
    user_password: string;
}
