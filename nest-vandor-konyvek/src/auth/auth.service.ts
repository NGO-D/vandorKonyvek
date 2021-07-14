import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from '../user/user.repository';
import { JwtPayload } from './jwt-payload.interface';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private readonly jwtService: JwtService,
        ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        console.log('auth service');
        console.log(authCredentialsDto);
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(signInCredentialsDto: SignInCredentialsDto): Promise<{accessToken: any}> {
        const user = await this.userRepository.validateUserPassword(signInCredentialsDto);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        // ezt ki kellene szervezni egy másik funkcióba
        const payload: JwtPayload = { userId: user.userId, 
                                      userIsAdmin: user.userIsAdmin, 
                                      userName: user.userName 
                                    };
        const accessToken = await this.jwtService.sign(payload);
        console.log('typeof accessToken');
        console.log(typeof accessToken);
        return { accessToken };
    } 
}
