import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BookRepository)
        private bookRepository: BookRepository) {}

    async getBooks(filterDto: GetBooksFilterDto): Promise<Book[]> {
        return await this.bookRepository.getBooks(filterDto);
    }

    async getOneBook(id: number): Promise<Book> {
        return await this.bookRepository.findOne(id);
    }

    async createBook(createBookDto: CreateBookDto): Promise<Book> {
        return await this.bookRepository.createBook(createBookDto);
    }

    async updateBook(id: number, body: any) {
        console.log('ize');
        return await this.bookRepository.update(id, body);
    }

    async deleteBook(id: number) {
        const result = await this.bookRepository.delete(id);

         //ez ugyanaz mint az if (!result) {}
         if (result.affected === 0) {
            throw new NotFoundException(`Task with ID '${id}' not found.`);
        }

    }
} 