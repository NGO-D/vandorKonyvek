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
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
        const user_email = await this.userRepository.validateUserPassword(authCredentialsDto);
        if (!user_email) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload: JwtPayload = { user_email };
        const accessToken = await this.jwtService.sign(payload);
        console.log(accessToken);

        return { accessToken };
    } 
}
