import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    getAllBooks(@Param() filterDto: GetBooksFilterDto): Promise<Book[]> {
        return this.booksService.getAllBooks(filterDto);
    }  

    @Post()
    createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.booksService.createBook(createBookDto);
    }
}