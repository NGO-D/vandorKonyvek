import { Injectable } from '@nestjs/common';
import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookRepository } from './books.repository';

@Injectable()
export class BooksService {
    constructor(private bookRepository: BookRepository) {}

    private books = [];

    async getAllBooks(filterDto: GetBooksFilterDto): Promise<Book[]> {
        return await this.bookRepository.getBooks(filterDto);
    }
} 