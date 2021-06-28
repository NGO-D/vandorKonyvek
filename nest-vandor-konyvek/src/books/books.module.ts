import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookRepository } from './books.repository';
//import { JwtAdminAuthGuard } from 'src/auth/guards/jwt-admin.guard';
//import { JwtCommonAuthGuard } from 'src/auth/guards/jwt-common.guard';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookRepository]), 
        AuthModule,
       // JwtAdminAuthGuard,
        // JwtCommonAuthGuard
    ],
    controllers: [BooksController],
    providers: [BooksService],

})
export class BooksModule {}
