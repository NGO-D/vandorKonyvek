import { Body, Controller, Post, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}
    
    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto ): Promise<any> {
        console.log('serverside');
        return this.authService.signUp(authCredentialsDto);
    }
    
    @Post('/signin')
    signIn(@Body(ValidationPipe) signInCredentialsDto: SignInCredentialsDto): Promise<{accessToken: string}> {
        console.log('serverside');
        return this.authService.signIn(signInCredentialsDto);
    }

}

