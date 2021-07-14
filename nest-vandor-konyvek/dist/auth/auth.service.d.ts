import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from '../user/user.repository';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
export declare class AuthService {
    private userRepository;
    private readonly jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(signInCredentialsDto: SignInCredentialsDto): Promise<{
        accessToken: any;
    }>;
}
