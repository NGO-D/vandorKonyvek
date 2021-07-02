import { IsEmail, IsNumber, IsString, Matches, MinLength } from "class-validator";
import { UserRegion } from "src/user/user-region.enum";
import { UserRole } from "src/user/user-role.enum";

export class AuthCredentialsDto {
    @IsString()
    userFirstName: string;

    @IsString()
    userLastName: string;

    userRegion: UserRegion;

    @IsString()
    userCity: string

    @IsNumber()
    userPostcode: number;

    @IsString()
    userName: string;

    userRole: UserRole.common;

    @IsString()
    @IsEmail()
    userEmail: string;

    @IsString()
    @MinLength(6)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
        {message: 'weak password'},
        )
    userPassword: string;
}
