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
        book_id: number,
        user: User
        ): Promise<Book>{
       
        const found = await this.bookRepository.findOne({ where: { book_id, bookUserId: user.user_id }});
        
            if (!found) {
                throw new NotFoundException(`Task with ID '${book_id}' not found.`);
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
        (book_id: number, 
        book_available: BookAvailable,
        user: User
        ) {
        const book = this.getBookById(book_id, user);
        (await book).book_available = book_available;
       
        return book;
    }

    async deleteBook(
        book_id: number,
        user: User
        ): Promise<void> {
        const result = await this.bookRepository.delete({book_id, bookUserId: user.user_id});

         //ez ugyanaz mint az if (!result) {}
         if (result.affected === 0) {
            throw new NotFoundException(`Task with ID '${book_id}' not found.`);
        }

    }
} 