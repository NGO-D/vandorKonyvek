import { Repository } from "typeorm";
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { User } from "./user.entity";
import { SignInCredentialsDto } from "src/auth/dto/signin-credentials.dto";
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    validateUserPassword(signInCredentialsDto: SignInCredentialsDto): Promise<User>;
    private hashPassword;
    firstLetterCapitalizer(userCity: string): Promise<string>;
}
