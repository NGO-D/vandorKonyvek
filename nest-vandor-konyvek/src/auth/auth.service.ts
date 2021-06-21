import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from '../user/user.repository';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
        ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        console.log('auth service');
        console.log(authCredentialsDto);
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: any}> {
        const user = await this.userRepository.validateUserPassword(authCredentialsDto);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload: JwtPayload = { user_email: user.user_email, 
                                      user_role: user.user_role, 
                                      user_userName: user.user_userName 
                                    };
        const accessToken = await this.jwtService.sign(payload);
        console.log(typeof accessToken);

        return { accessToken };
    } 
}
