import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { BookAvailable } from './book-available.enum';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BookRepository)
        private bookRepository: BookRepository) {}

    async getBooks(
        filterDto: GetBooksFilterDto,
        user: User): Promise<Book[]> {
        return await this.bookRepository.getBooks(filterDto, user);
    }

    async getBookById(
        bookId: number,
        user: User
        ): Promise<Book>{
       
        const found = await this.bookRepository.findOne({ where: { bookId, bookUserId: user.userId }});
        
            if (!found) {
                throw new NotFoundException(`Task with ID '${bookId}' not found.`);
            }
        
        return found;
    }

    async createBook(
        createBookDto: CreateBookDto, 
        user: User
        ): Promise<Book> {
        return await this.bookRepository.createBook(createBookDto, user);
    }

    async updateBookStatus
        (bookId: number, 
        bookAvailable: BookAvailable,
        user: User
        ) {
        const book = this.getBookById(bookId, user);
        (await book).bookAvailable = bookAvailable;
       
        return book;
    }

    async deleteBook(
        bookId: number,
        user: User
        ): Promise<void> {
        const result = await this.bookRepository.delete({bookId, bookUserId: user.userId});

         //ez ugyanaz mint az if (!result) {}
         if (result.affected === 0) {
            throw new NotFoundException(`Task with ID '${bookId}' not found.`);
        }

    }
} 