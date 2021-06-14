import { Body, Controller, Post, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from '../user/user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('/register')
    signUp(@Body() body): Promise<void> {
        console.log('baaaack');
        return this.authService.signUp(body);
    } 
    
    /*
    @Post('/register')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto ): Promise<any> {
        console.log('baaaack');
        return this.authService.signUp(authCredentialsDto);
    }
    */

    /*
    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
        return this.authService.signIn(authCredentialsDto);
    }
    */

    @Post('/signin')
    signIn(@Body() body): Promise<any> {
        console.log('backendben vagyok');
        return this.authService.signIn(body);
    }
    
}

