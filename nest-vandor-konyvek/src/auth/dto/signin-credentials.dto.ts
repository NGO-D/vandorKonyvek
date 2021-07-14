import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class SignInCredentialsDto {
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
