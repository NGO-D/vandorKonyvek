import { Injectable } from '@nestjs/common';
import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';

@Injectable()
export class BooksService {

    private books = [];

    getAllBooks(filterDto: GetBooksFilterDto): any {
        return this.books;
    }
} 