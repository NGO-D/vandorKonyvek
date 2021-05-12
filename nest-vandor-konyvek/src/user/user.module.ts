import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from './user.repository';


@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]), 
    ],
    controllers: [
        
    ],
    providers: [
        
    ],

})
export class UserModule {}