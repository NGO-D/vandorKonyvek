import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../user/user.repository';
import { JwtStrategy } from './jwt.strategy';
import * as config from 'config';
import { UserModule } from 'src/user/user.module';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
//import { JwtAdminAuthGuard } from './guards/jwt-admin.guard';
//import { JwtCommonAuthGuard } from './guards/jwt-common.guard';


const jwtConfig = config.get('jwt'); 

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET || jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expiresIn,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
    UserModule,
    AuthCredentialsDto,
  ],

  controllers: [
    AuthController
  ],

  providers: [
    AuthService,
    JwtStrategy,
    //JwtAdminAuthGuard,
    //JwtCommonAuthGuard
  ],

  exports: [
    JwtStrategy,
    PassportModule,
    AuthCredentialsDto,
    //JwtAdminAuthGuard,
    //JwtCommonAuthGuard
  ],

})
export class AuthModule {}
