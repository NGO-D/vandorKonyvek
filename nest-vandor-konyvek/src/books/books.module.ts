import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookRepository } from './books.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookRepository]), 
        AuthModule,
    ],
    controllers: [BooksController],
    providers: [BooksService],

})
export class BooksModule {}
