import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';


@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]), 
        UserRepository,
        User,
        AuthCredentialsDto,
    ],

    controllers: [
        
    ],
    providers: [
        
    ],

    exports: [
        UserRepository,
        User,
    ]

})
export class UserModule {}