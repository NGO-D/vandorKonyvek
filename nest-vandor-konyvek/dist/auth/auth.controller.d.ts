import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<any>;
    signIn(signInCredentialsDto: SignInCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
